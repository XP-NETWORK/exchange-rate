import { BatchExchangeRateRepo } from './BaseExchangeRateRepo';
import { CMCModel } from './model';
import { CMCId } from './model/coinmarketcap';
export declare function cmcBatchExchangeRepo(service: CMCModel.BatchExchangeRateService, idMapper: CMCModel.IdMapper<CMCId | number>, respMapper: CMCModel.ExchangeRateDtoMapper): BatchExchangeRateRepo;
