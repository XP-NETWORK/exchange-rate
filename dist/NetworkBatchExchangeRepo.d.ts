import { BatchExchangeRateRepo } from './BaseExchangeRateRepo';
import { NetworkBatchExchangeRateService } from './model/network/BatchExchangeRateService';
import { ExchangeRateDtoMapper } from './model/network/ExchangeRateDtoMapper';
export declare function networkBatchExchangeRateRepo(service: NetworkBatchExchangeRateService, mapper: ExchangeRateDtoMapper): BatchExchangeRateRepo;
