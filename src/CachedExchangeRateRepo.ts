import {
    BatchExchangeRateRepo,
    ExchangeRateRepo,
} from './BaseExchangeRateRepo';
import ExchangeRateMap from './model/domain/ExchangeRateMap';
import { SupportedCurrency } from './model/domain/SupportedCurrency';

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
): ExchangeRateRepo {
    let _cache: ExchangeRateMap | undefined = undefined;
    let _cache_date = Date.now();

    async function getCache(): Promise<ExchangeRateMap> {
        const fetchCache = async () => {
            _cache = await baseBatch.getBatchedRate(
                Object.values(SupportedCurrency)
            );
            _cache_date = Date.now();
        };
        if (_cache === undefined) {
            await fetchCache();
        } else if (_cache_date - Date.now() > cacheExpiry) {
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
    };
}
