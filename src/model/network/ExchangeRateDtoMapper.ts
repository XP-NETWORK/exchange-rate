import { SupportedCurrency } from '../domain';
import ExchangeRateMap from '../domain/ExchangeRateMap';
import { ExchangeRateDto } from './ExchangeRateDto';

export type ExchangeRateDtoMapper = {
    toDomain(model: ExchangeRateDto): ExchangeRateMap;
};

type RespK = keyof typeof SupportedCurrency;

const rev = Object.fromEntries(
    Object.entries(SupportedCurrency).map(([a, b]) => {
        return [b, a] as const;
    })
);

export function exchangeRateDtoMapper(): ExchangeRateDtoMapper {
    return {
        toDomain: (model: ExchangeRateDto) =>
            new Map(
                Object.entries(model).map(([ent, v]) => {
                    return [SupportedCurrency[rev[ent] as RespK], v];
                })
            ),
    };
}
