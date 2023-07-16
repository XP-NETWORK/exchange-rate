import {
    BatchExchangeRateRepo,
    ExchangeRateRepo,
} from './BaseExchangeRateRepo';
import ExchangeRateMap from './model/domain/ExchangeRateMap';
import { SupportedCurrency } from './model/domain/SupportedCurrency';

type CacheExpiry = {
    getCacheExpiry(): number;
};

/**
 * Exchange Rate Repo which uses cache from a BatchExchangeRateRepo source
 *
 * uses old cache on error
 *
 * @param baseBatch Base Repo for getting batch exchange rates
 * @param cacheExpiry time to wait before fetching new exchange rates. (Default: 1 hour)
 */
export function cachedExchangeRateRepo(
    baseBatch: BatchExchangeRateRepo,
    cacheExpiry = 3.6e6
): ExchangeRateRepo & BatchExchangeRateRepo & CacheExpiry {
    let _cache: ExchangeRateMap | undefined = undefined;
    let _cache_ms = Date.now();
    const supported = Object.values(SupportedCurrency).filter(
        (v) => v !== SupportedCurrency.OPL && v !== SupportedCurrency.APTOS
    );
    function getCacheExpiry(): number {
        const diff = Date.now() - _cache_ms;
        if (diff > cacheExpiry) {
            return 0;
        } else {
            return cacheExpiry - diff;
        }
    }

    async function getCache(): Promise<ExchangeRateMap> {
        const fetchCache = async () => {
            _cache = await baseBatch.getBatchedRate(Object.values(supported));
            _cache.set(SupportedCurrency.OPL, 0.01);
            _cache.set(SupportedCurrency.APTOS, 1);
            //hardcoded workarond for aurora for now
            _cache.set(
                SupportedCurrency.AURORA,
                _cache.get(SupportedCurrency.ETH)!
            );
            _cache_ms = Date.now();
        };
        if (_cache === undefined) {
            await fetchCache();
        } else if (getCacheExpiry() == 0) {
            const old_cache = new Map(_cache);
            await fetchCache().catch((e) => {
                console.warn(
                    `failed to fetch exchange rate: ${e}, using old data!`
                );
                _cache = old_cache;
            });
        }

        return _cache!;
    }

    return {
        async getExchangeRate(
            c1: SupportedCurrency,
            c2: SupportedCurrency
        ): Promise<number> {
            const cache = await getCache();
            const r1 = cache.get(c1);
            const r2 = cache.get(c2);

            if (r1 === undefined || r2 === undefined) {
                throw Error('imporper batch exchange impl?!');
            }

            return r1 / r2;
        },
        async getBatchedRate(): Promise<ExchangeRateMap> {
            return new Map(await getCache());
        },
        getCacheExpiry,
    };
}
