"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idMapper = void 0;
const SupportedCurrency_1 = require("../domain/SupportedCurrency");
const CMCId_1 = require("./CMCId");
const ens = [
    [CMCId_1.CMCId.ETH, SupportedCurrency_1.SupportedCurrency.ETH],
    [CMCId_1.CMCId.BNB, SupportedCurrency_1.SupportedCurrency.BNB],
    [CMCId_1.CMCId.TRX, SupportedCurrency_1.SupportedCurrency.TRX],
    [CMCId_1.CMCId.HT, SupportedCurrency_1.SupportedCurrency.HT],
    [CMCId_1.CMCId.FTM, SupportedCurrency_1.SupportedCurrency.FTM],
    [CMCId_1.CMCId.MATIC, SupportedCurrency_1.SupportedCurrency.MATIC],
    [CMCId_1.CMCId.ONE, SupportedCurrency_1.SupportedCurrency.ONE],
    [CMCId_1.CMCId.CELO, SupportedCurrency_1.SupportedCurrency.CELO],
    [CMCId_1.CMCId.AVAX, SupportedCurrency_1.SupportedCurrency.AVAX],
    [CMCId_1.CMCId.EGLD, SupportedCurrency_1.SupportedCurrency.EGLD],
    [CMCId_1.CMCId.XPNET, SupportedCurrency_1.SupportedCurrency.XPNET],
    [CMCId_1.CMCId.ONT, SupportedCurrency_1.SupportedCurrency.ONT],
    [CMCId_1.CMCId.XDAI, SupportedCurrency_1.SupportedCurrency.XDAI],
    [CMCId_1.CMCId.ALGO, SupportedCurrency_1.SupportedCurrency.ALGO],
    [CMCId_1.CMCId.FUSE, SupportedCurrency_1.SupportedCurrency.FUSE],
    [CMCId_1.CMCId.XTZ, SupportedCurrency_1.SupportedCurrency.XTZ],
    [CMCId_1.CMCId.VLX, SupportedCurrency_1.SupportedCurrency.VLX],
    [CMCId_1.CMCId.IOTX, SupportedCurrency_1.SupportedCurrency.IOTX],
    [CMCId_1.CMCId.AURORA, SupportedCurrency_1.SupportedCurrency.AURORA],
    [CMCId_1.CMCId.VET, SupportedCurrency_1.SupportedCurrency.VET],
    [CMCId_1.CMCId.CKB, SupportedCurrency_1.SupportedCurrency.CKB],
    [CMCId_1.CMCId.GT, SupportedCurrency_1.SupportedCurrency.GT],
    [CMCId_1.CMCId.SCRT, SupportedCurrency_1.SupportedCurrency.SCRT],
    [CMCId_1.CMCId.SOL, SupportedCurrency_1.SupportedCurrency.SOL],
    [CMCId_1.CMCId.TON, SupportedCurrency_1.SupportedCurrency.TON],
    [CMCId_1.CMCId.ICP, SupportedCurrency_1.SupportedCurrency.ICP]
];
const enMap = new Map(ens);
const enMapRev = new Map(ens.map(([k, v]) => [v, k]));
function idMapper() {
    function toDomain(id) {
        return enMap.get(id);
    }
    function fromDomain(domain) {
        return enMapRev.get(domain);
    }
    return {
        toDomain,
        fromDomain,
        toDomainList: (models) => models.map(toDomain),
        fromDomainList: (domains) => domains.map(fromDomain),
    };
}
exports.idMapper = idMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRNYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvY29pbm1hcmtldGNhcC9JZE1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtRUFBZ0U7QUFDaEUsbUNBQWdDO0FBU2hDLE1BQU0sR0FBRyxHQUFpQztJQUN0QyxDQUFDLGFBQUssQ0FBQyxHQUFHLEVBQUUscUNBQWlCLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxhQUFLLENBQUMsR0FBRyxFQUFFLHFDQUFpQixDQUFDLEdBQUcsQ0FBQztJQUNsQyxDQUFDLGFBQUssQ0FBQyxFQUFFLEVBQUUscUNBQWlCLENBQUMsRUFBRSxDQUFDO0lBQ2hDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxhQUFLLENBQUMsS0FBSyxFQUFFLHFDQUFpQixDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDLGFBQUssQ0FBQyxHQUFHLEVBQUUscUNBQWlCLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUMsYUFBSyxDQUFDLElBQUksRUFBRSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQyxhQUFLLENBQUMsSUFBSSxFQUFFLHFDQUFpQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUscUNBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUMsYUFBSyxDQUFDLEtBQUssRUFBRSxxQ0FBaUIsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQyxhQUFLLENBQUMsR0FBRyxFQUFFLHFDQUFpQixDQUFDLEdBQUcsQ0FBQztJQUNsQyxDQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUscUNBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUMsYUFBSyxDQUFDLElBQUksRUFBRSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQyxhQUFLLENBQUMsSUFBSSxFQUFFLHFDQUFpQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDLGFBQUssQ0FBQyxHQUFHLEVBQUUscUNBQWlCLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxhQUFLLENBQUMsSUFBSSxFQUFFLHFDQUFpQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDLGFBQUssQ0FBQyxNQUFNLEVBQUUscUNBQWlCLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxhQUFLLENBQUMsR0FBRyxFQUFFLHFDQUFpQixDQUFDLEdBQUcsQ0FBQztJQUNsQyxDQUFDLGFBQUssQ0FBQyxFQUFFLEVBQUUscUNBQWlCLENBQUMsRUFBRSxDQUFDO0lBQ2hDLENBQUMsYUFBSyxDQUFDLElBQUksRUFBRSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQyxhQUFLLENBQUMsR0FBRyxFQUFFLHFDQUFpQixDQUFDLEdBQUcsQ0FBQztJQUNsQyxDQUFDLGFBQUssQ0FBQyxHQUFHLEVBQUUscUNBQWlCLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7Q0FDckMsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLE1BQU0sUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXRELFNBQWdCLFFBQVE7SUFDcEIsU0FBUyxRQUFRLENBQUMsRUFBUztRQUN2QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNELFNBQVMsVUFBVSxDQUFDLE1BQXlCO1FBQ3pDLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsT0FBTztRQUNILFFBQVE7UUFDUixVQUFVO1FBQ1YsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM5QyxjQUFjLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0tBQ3ZELENBQUM7QUFDTixDQUFDO0FBYkQsNEJBYUMifQ==