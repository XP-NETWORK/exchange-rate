import ExchangeRateMap from '../domain/ExchangeRateMap';
import { IdMapper } from './IdMapper';
import { ExchangeRateDto } from './ExchangeRateDto';

export type ExchangeRateDtoMapper = {
    toDomain(model: ExchangeRateDto): ExchangeRateMap;
};

export function exchangeRateDtoMapper(
    coinMarketIdMapper: IdMapper
): ExchangeRateDtoMapper {
    return {
        toDomain: (model: ExchangeRateDto) => {
            return new Map(
                Object.values(model.data).map(({ id, quote: { USD: usd } }) => [
                    coinMarketIdMapper.toDomain(id),
                    usd.price,
                ])
            );
        },
    };
}
