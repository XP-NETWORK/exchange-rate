import { BatchExchangeRateRepo } from './BaseExchangeRateRepo';
import { CMCModel } from './model';

export function cmcBatchExchangeRepo(
    service: CMCModel.BatchExchangeRateService,
    idMapper: CMCModel.IdMapper,
    respMapper: CMCModel.ExchangeRateDtoMapper
): BatchExchangeRateRepo {
    return {
        getBatchedRate: (currencies) =>
            service
                .getBatchedRate(idMapper.fromDomainList(currencies))
                .then(respMapper.toDomain),
    };
}
