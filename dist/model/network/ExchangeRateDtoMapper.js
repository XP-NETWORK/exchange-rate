"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeRateDtoMapper = void 0;
const domain_1 = require("../domain");
const rev = Object.fromEntries(Object.entries(domain_1.SupportedCurrency).map(([a, b]) => {
    return [b, a];
}));
function exchangeRateDtoMapper() {
    return {
        toDomain: (model) => new Map(Object.entries(model).map(([ent, v]) => {
            return [domain_1.SupportedCurrency[rev[ent]], v];
        })),
    };
}
exports.exchangeRateDtoMapper = exchangeRateDtoMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhjaGFuZ2VSYXRlRHRvTWFwcGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVsL25ldHdvcmsvRXhjaGFuZ2VSYXRlRHRvTWFwcGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE4QztBQVU5QyxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLDBCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUM3QyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBVSxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUNMLENBQUM7QUFFRixTQUFnQixxQkFBcUI7SUFDakMsT0FBTztRQUNILFFBQVEsRUFBRSxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUNqQyxJQUFJLEdBQUcsQ0FDSCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsT0FBTyxDQUFDLDBCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUNMO0tBQ1IsQ0FBQztBQUNOLENBQUM7QUFURCxzREFTQyJ9