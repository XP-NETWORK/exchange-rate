"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cachedExchangeRateRepo = void 0;
const SupportedCurrency_1 = require("./model/domain/SupportedCurrency");
/**
 * Exchange Rate Repo which uses cache from a BatchExchangeRateRepo source
 *
 * uses old cache on error
 *
 * @param baseBatch Base Repo for getting batch exchange rates
 * @param cacheExpiry time to wait before fetching new exchange rates. (Default: 1 hour)
 */
function cachedExchangeRateRepo(baseBatch, cacheExpiry = 3.6e6) {
    let _cache = undefined;
    let _cache_ms = Date.now();
    const supported = Object.values(SupportedCurrency_1.SupportedCurrency).filter((v) => v !== SupportedCurrency_1.SupportedCurrency.OPL && v !== SupportedCurrency_1.SupportedCurrency.APTOS);
    function getCacheExpiry() {
        const diff = Date.now() - _cache_ms;
        if (diff > cacheExpiry) {
            return 0;
        }
        else {
            return cacheExpiry - diff;
        }
    }
    async function getCache() {
        const fetchCache = async () => {
            _cache = await baseBatch.getBatchedRate(Object.values(supported));
            _cache.set(SupportedCurrency_1.SupportedCurrency.OPL, 0.01);
            _cache.set(SupportedCurrency_1.SupportedCurrency.APTOS, 1);
            //hardcoded workarond for aurora for now
            _cache.set(SupportedCurrency_1.SupportedCurrency.AURORA, _cache.get(SupportedCurrency_1.SupportedCurrency.ETH));
            _cache_ms = Date.now();
        };
        if (_cache === undefined) {
            await fetchCache();
        }
        else if (getCacheExpiry() == 0) {
            const old_cache = new Map(_cache);
            await fetchCache().catch((e) => {
                console.warn(`failed to fetch exchange rate: ${e}, using old data!`);
                _cache = old_cache;
            });
        }
        return _cache;
    }
    return {
        async getExchangeRate(c1, c2) {
            const cache = await getCache();
            const r1 = cache.get(c1);
            const r2 = cache.get(c2);
            if (r1 === undefined || r2 === undefined) {
                throw Error('imporper batch exchange impl?!');
            }
            return r1 / r2;
        },
        async getBatchedRate() {
            return new Map(await getCache());
        },
        getCacheExpiry,
    };
}
exports.cachedExchangeRateRepo = cachedExchangeRateRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVkRXhjaGFuZ2VSYXRlUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9DYWNoZWRFeGNoYW5nZVJhdGVSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLHdFQUFxRTtBQU1yRTs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQ2xDLFNBQWdDLEVBQ2hDLFdBQVcsR0FBRyxLQUFLO0lBRW5CLElBQUksTUFBTSxHQUFnQyxTQUFTLENBQUM7SUFDcEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzNCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMscUNBQWlCLENBQUMsQ0FBQyxNQUFNLENBQ3JELENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUsscUNBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxxQ0FBaUIsQ0FBQyxLQUFLLENBQ3RFLENBQUM7SUFDRixTQUFTLGNBQWM7UUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUNwQyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7WUFDcEIsT0FBTyxDQUFDLENBQUM7U0FDWjthQUFNO1lBQ0gsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVELEtBQUssVUFBVSxRQUFRO1FBQ25CLE1BQU0sVUFBVSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQzFCLE1BQU0sR0FBRyxNQUFNLFNBQVMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxHQUFHLENBQUMscUNBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMscUNBQWlCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLHdDQUF3QztZQUN4QyxNQUFNLENBQUMsR0FBRyxDQUNOLHFDQUFpQixDQUFDLE1BQU0sRUFDeEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxxQ0FBaUIsQ0FBQyxHQUFHLENBQUUsQ0FDckMsQ0FBQztZQUNGLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE1BQU0sVUFBVSxFQUFFLENBQUM7U0FDdEI7YUFBTSxJQUFJLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxNQUFNLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUMzQixPQUFPLENBQUMsSUFBSSxDQUNSLGtDQUFrQyxDQUFDLG1CQUFtQixDQUN6RCxDQUFDO2dCQUNGLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELE9BQU8sTUFBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPO1FBQ0gsS0FBSyxDQUFDLGVBQWUsQ0FDakIsRUFBcUIsRUFDckIsRUFBcUI7WUFFckIsTUFBTSxLQUFLLEdBQUcsTUFBTSxRQUFRLEVBQUUsQ0FBQztZQUMvQixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFekIsSUFBSSxFQUFFLEtBQUssU0FBUyxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7Z0JBQ3RDLE1BQU0sS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7YUFDakQ7WUFFRCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUNELEtBQUssQ0FBQyxjQUFjO1lBQ2hCLE9BQU8sSUFBSSxHQUFHLENBQUMsTUFBTSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFDRCxjQUFjO0tBQ2pCLENBQUM7QUFDTixDQUFDO0FBakVELHdEQWlFQyJ9