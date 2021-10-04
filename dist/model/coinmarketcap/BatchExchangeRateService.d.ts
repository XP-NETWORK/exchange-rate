import { BaseBatchExchangeRateService } from '..';
import { CMCId } from './CMCId';
import { ExchangeRateDto } from './ExchangeRateDto';
export declare type CMCBatchExchangeRateService = BaseBatchExchangeRateService<CMCId, ExchangeRateDto>;
export declare function cmcBatchExchangeRateService(apiUri: string, apiKey: string): CMCBatchExchangeRateService;
