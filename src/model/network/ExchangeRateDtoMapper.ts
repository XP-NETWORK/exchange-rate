import ExchangeRateMap from "../domain/ExchangeRateMap";
import { ExchangeRateDto } from "./ExchangeRateDto";

export type ExchangeRateDtoMapper = {
    toDomain(model: ExchangeRateDto): ExchangeRateMap;
};

export function exchangeRateDtoMapper() {
    return {
        toDomain: (model: ExchangeRateDto) => new Map(Object.entries(model))
    }
}