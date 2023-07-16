"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchExchangeRateService = void 0;
const axios_1 = __importDefault(require("axios"));
function batchExchangeRateService(apiUri, apiKey) {
    const client = axios_1.default.create({
        baseURL: apiUri,
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
            Accept: 'application/json',
            'Accept-Encoding': 'deflate, gzip',
        },
    });
    return {
        async getBatchedRate(currencies) {
            const res = await client.get('/v1/cryptocurrency/quotes/latest', {
                params: {
                    id: currencies.filter((c) => c).join(','),
                },
            });
            const data = res.data;
            if (data.status.error_code != 0) {
                throw Error(`failed to fetch exchange rate ${data.status.error_message}`);
            }
            return data;
        },
    };
}
exports.batchExchangeRateService = batchExchangeRateService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmF0Y2hFeGNoYW5nZVJhdGVTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVsL2NvaW5tYXJrZXRjYXAvQmF0Y2hFeGNoYW5nZVJhdGVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUE2QztBQVU3QyxTQUFnQix3QkFBd0IsQ0FDcEMsTUFBYyxFQUNkLE1BQWM7SUFFZCxNQUFNLE1BQU0sR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3hCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsT0FBTyxFQUFFO1lBQ0wsbUJBQW1CLEVBQUUsTUFBTTtZQUMzQixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLGlCQUFpQixFQUFFLGVBQWU7U0FDckM7S0FDSixDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ0gsS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFtQjtZQUNwQyxNQUFNLEdBQUcsR0FBbUMsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUN4RCxrQ0FBa0MsRUFDbEM7Z0JBQ0ksTUFBTSxFQUFFO29CQUNKLEVBQUUsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUM1QzthQUNKLENBQ0osQ0FBQztZQUNGLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sS0FBSyxDQUNQLGlDQUFpQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUMvRCxDQUFDO2FBQ0w7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUM7QUFqQ0QsNERBaUNDIn0=