import { CMCId } from './CMCId';
import { ExchangeRateDto } from './ExchangeRateDto';
export declare type CMCBatchExchangeRateService = {
    getBatchedRate(curencies: CMCId[]): Promise<ExchangeRateDto>;
};
export declare function cmcBatchExchangeRateService(apiUri: string, apiKey: string): CMCBatchExchangeRateService;
