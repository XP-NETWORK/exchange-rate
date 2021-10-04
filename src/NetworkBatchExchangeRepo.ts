import { BatchExchangeRateRepo } from "./BaseExchangeRateRepo";
import { NetworkBatchExchangeRateService } from "./model/network/BatchExchangeRateService";
import { ExchangeRateDtoMapper } from "./model/network/ExchangeRateDtoMapper";

export function networkBatchExchangeRateRepo(
    service: NetworkBatchExchangeRateService,
    mapper: ExchangeRateDtoMapper
): BatchExchangeRateRepo {
    return {
        getBatchedRate: (v) => service.getBatchedRate(v).then(mapper.toDomain)
    }
}