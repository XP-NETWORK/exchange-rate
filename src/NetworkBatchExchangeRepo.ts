import { BatchExchangeRateRepo } from './BaseExchangeRateRepo';
import { NetworkModel } from './model';

export function networkBatchExchangeRateRepo(
    service: NetworkModel.BatchExchangeRateService,
    mapper: NetworkModel.ExchangeRateDtoMapper
): BatchExchangeRateRepo {
    return {
        getBatchedRate: (v) => service.getBatchedRate(v).then(mapper.toDomain),
    };
}
