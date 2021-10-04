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
    let _cache_date = Date.now();
    async function getCache() {
        const fetchCache = async () => {
            _cache = await baseBatch.getBatchedRate(Object.values(SupportedCurrency_1.SupportedCurrency));
            _cache_date = Date.now();
        };
        if (_cache === undefined) {
            await fetchCache();
        }
        else if (_cache_date - Date.now() > cacheExpiry) {
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
        }
    };
}
exports.cachedExchangeRateRepo = cachedExchangeRateRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVkRXhjaGFuZ2VSYXRlUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9DYWNoZWRFeGNoYW5nZVJhdGVSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLHdFQUFxRTtBQUVyRTs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQ2xDLFNBQWdDLEVBQ2hDLFdBQVcsR0FBRyxLQUFLO0lBRW5CLElBQUksTUFBTSxHQUFnQyxTQUFTLENBQUM7SUFDcEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRTdCLEtBQUssVUFBVSxRQUFRO1FBQ25CLE1BQU0sVUFBVSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQzFCLE1BQU0sR0FBRyxNQUFNLFNBQVMsQ0FBQyxjQUFjLENBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMscUNBQWlCLENBQUMsQ0FDbkMsQ0FBQztZQUNGLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE1BQU0sVUFBVSxFQUFFLENBQUM7U0FDdEI7YUFBTSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsV0FBVyxFQUFFO1lBQy9DLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQ1Isa0NBQWtDLENBQUMsbUJBQW1CLENBQ3pELENBQUM7Z0JBQ0YsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxNQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU87UUFDSCxLQUFLLENBQUMsZUFBZSxDQUNqQixFQUFxQixFQUNyQixFQUFxQjtZQUVyQixNQUFNLEtBQUssR0FBRyxNQUFNLFFBQVEsRUFBRSxDQUFDO1lBQy9CLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV6QixJQUFJLEVBQUUsS0FBSyxTQUFTLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtnQkFDdEMsTUFBTSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzthQUNqRDtZQUVELE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBQ0QsS0FBSyxDQUFDLGNBQWM7WUFDaEIsT0FBTyxJQUFJLEdBQUcsQ0FBQyxNQUFNLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDO0FBaERELHdEQWdEQyJ9