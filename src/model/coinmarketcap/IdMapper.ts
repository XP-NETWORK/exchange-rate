import { SupportedCurrency } from '../domain/SupportedCurrency';
import { CMCId } from './CMCId';

export type IdMapper = {
    toDomain(id: CMCId): SupportedCurrency;
    fromDomain(domain: SupportedCurrency): CMCId;
    toDomainList(models: CMCId[]): SupportedCurrency[];
    fromDomainList(domains: SupportedCurrency[]): CMCId[];
};

const ens: [CMCId, SupportedCurrency][] = [
    [CMCId.ETH, SupportedCurrency.ETH],
    [CMCId.BNB, SupportedCurrency.BNB],
    [CMCId.TRX, SupportedCurrency.TRX],
    [CMCId.HT, SupportedCurrency.HT],
    [CMCId.FTM, SupportedCurrency.FTM],
    [CMCId.MATIC, SupportedCurrency.MATIC],
    [CMCId.ONE, SupportedCurrency.ONE],
    [CMCId.CELO, SupportedCurrency.CELO],
    [CMCId.AVAX, SupportedCurrency.AVAX],
    [CMCId.EGLD, SupportedCurrency.EGLD],
    [CMCId.XPNET, SupportedCurrency.XPNET],
    [CMCId.ONT, SupportedCurrency.ONT],
    [CMCId.XDAI, SupportedCurrency.XDAI],
    [CMCId.ALGO, SupportedCurrency.ALGO],
    [CMCId.FUSE, SupportedCurrency.FUSE],
    [CMCId.XTZ, SupportedCurrency.XTZ],
    [CMCId.VLX, SupportedCurrency.VLX],
    [CMCId.IOTX, SupportedCurrency.IOTX],
    [CMCId.AURORA, SupportedCurrency.AURORA],
    [CMCId.VET, SupportedCurrency.VET],
    [CMCId.CKB, SupportedCurrency.CKB],
    [CMCId.GT, SupportedCurrency.GT],
    [CMCId.SCRT, SupportedCurrency.SCRT],
    [CMCId.SOL, SupportedCurrency.SOL],
    [CMCId.TON, SupportedCurrency.TON],
    [CMCId.ICP, SupportedCurrency.ICP],
    [CMCId.HBAR, SupportedCurrency.HBAR],
    [CMCId.sFUEL, SupportedCurrency.sFUEL]
];

const enMap = new Map(ens);
const enMapRev = new Map(ens.map(([k, v]) => [v, k]));

export function idMapper(): IdMapper {
    function toDomain(id: CMCId): SupportedCurrency {
        return enMap.get(id)!;
    }
    function fromDomain(domain: SupportedCurrency): CMCId {
        return enMapRev.get(domain)!;
    }
    return {
        toDomain,
        fromDomain,
        toDomainList: (models) => models.map(toDomain),
        fromDomainList: (domains) => domains.map(fromDomain),
    };
}
