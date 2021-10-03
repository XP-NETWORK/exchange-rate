"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeRateDtoMapper = void 0;
function exchangeRateDtoMapper(coinMarketIdMapper) {
    return {
        toDomain: (model) => {
            return new Map(model.data.map(({ id, quote: { USD: usd } }) => [
                coinMarketIdMapper.toDomain(id),
                usd.price,
            ]));
        },
    };
}
exports.exchangeRateDtoMapper = exchangeRateDtoMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjaGFuZ2VSYXRlRHRvTWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVsL2NvaW5tYXJrZXRjYXAvRXhjaGFuZ2VSYXRlRHRvTWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVFBLFNBQWdCLHFCQUFxQixDQUNqQyxrQkFBK0I7SUFFL0IsT0FBTztRQUNILFFBQVEsRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUNqQyxPQUFPLElBQUksR0FBRyxDQUNWLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUMvQixHQUFHLENBQUMsS0FBSzthQUNaLENBQUMsQ0FDTCxDQUFDO1FBQ04sQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDO0FBYkQsc0RBYUMifQ==