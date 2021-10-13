import ExchangeRateMap from '../domain/ExchangeRateMap';
import { CMCIdMapper } from './CMCIdMapper';
import { ExchangeRateDto } from './ExchangeRateDto';
export declare type ExchangeRateDtoMapper = {
    toDomain(model: ExchangeRateDto): ExchangeRateMap;
};
export declare function exchangeRateDtoMapper(coinMarketIdMapper: CMCIdMapper): ExchangeRateDtoMapper;
