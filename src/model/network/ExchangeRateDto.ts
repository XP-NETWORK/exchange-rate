import { SupportedCurrency } from "../domain";

export type ExchangeRateDto = {
    [key in SupportedCurrency]: number
}