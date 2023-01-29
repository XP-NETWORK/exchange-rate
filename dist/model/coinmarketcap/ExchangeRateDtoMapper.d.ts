import ExchangeRateMap from '../domain/ExchangeRateMap';
import { IdMapper } from './IdMapper';
import { ExchangeRateDto } from './ExchangeRateDto';
import { CMCId } from './CMCId';
export declare type ExchangeRateDtoMapper = {
    toDomain(model: ExchangeRateDto): ExchangeRateMap;
};
export declare function exchangeRateDtoMapper(coinMarketIdMapper: IdMapper<CMCId | number>): ExchangeRateDtoMapper;
