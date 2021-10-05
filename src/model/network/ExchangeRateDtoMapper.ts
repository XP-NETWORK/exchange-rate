import { SupportedCurrency } from '../domain';
import ExchangeRateMap from '../domain/ExchangeRateMap';
import { ExchangeRateDto } from './ExchangeRateDto';

export type ExchangeRateDtoMapper = {
    toDomain(model: ExchangeRateDto): ExchangeRateMap;
};

type RespK = keyof typeof SupportedCurrency;

export function exchangeRateDtoMapper(): ExchangeRateDtoMapper {
    return {
        toDomain: (model: ExchangeRateDto) =>
            new Map(
                Object.entries(model).map(([ent, v]) => [
                    SupportedCurrency[ent as RespK],
                    v,
                ])
            ),
    };
}
