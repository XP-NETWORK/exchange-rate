import { BatchExchangeRateRepo } from './BaseExchangeRateRepo';
import { CMCBatchExchangeRateService } from './model/coinmarketcap/BatchExchangeRateService';
import { CMCIdMapper } from './model/coinmarketcap/CMCIdMapper';
import { ExchangeRateDtoMapper } from './model/coinmarketcap/ExchangeRateDtoMapper';
export declare function cmcBatchExchangeRepo(service: CMCBatchExchangeRateService, idMapper: CMCIdMapper, respMapper: ExchangeRateDtoMapper): BatchExchangeRateRepo;
