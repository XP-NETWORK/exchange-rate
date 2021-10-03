import ExchangeRateMap from '../domain/ExchangeRateMap';
import { CMCIdMapper } from './CMCIdMapper';
import { ExchangeRateDto } from './ExchangeRateDto';

export type ExchangeRateDtoMapper = {
    toDomain(model: ExchangeRateDto): ExchangeRateMap;
};

export function exchangeRateDtoMapper(
    coinMarketIdMapper: CMCIdMapper
): ExchangeRateDtoMapper {
    return {
        toDomain: (model: ExchangeRateDto) => {
            return new Map(
                model.data.map(({ id, quote: { USD: usd } }) => [
                    coinMarketIdMapper.toDomain(id),
                    usd.price,
                ])
            );
        },
    };
}
