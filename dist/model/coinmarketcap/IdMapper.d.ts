import { SupportedCurrency } from '../domain/SupportedCurrency';
import { CMCId } from './CMCId';
export declare type IdMapper<From> = {
    toDomain(id: From): SupportedCurrency;
    fromDomain(domain: SupportedCurrency): From;
    toDomainList(models: From[]): SupportedCurrency[];
    fromDomainList(domains: SupportedCurrency[]): From[];
};
export declare function idMapper(): IdMapper<CMCId>;
