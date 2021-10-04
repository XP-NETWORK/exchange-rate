import { BaseBatchExchangeRateService } from "..";
import { SupportedCurrency } from "../domain";
import { ExchangeRateDto } from "./ExchangeRateDto";
export declare type NetworkBatchExchangeRateService = BaseBatchExchangeRateService<SupportedCurrency, ExchangeRateDto>;
export declare function networkBatchExchangeRateService(baseURL: string): {
    getBatchedRate(): Promise<ExchangeRateDto>;
};
