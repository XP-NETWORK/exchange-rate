import { BatchExchangeRateRepo } from './BaseExchangeRateRepo';
import { CMCBatchExchangeRateService } from './model/coinmarketcap/BatchExchangeRateService';
import { CMCIdMapper } from './model/coinmarketcap/CMCIdMapper';
import { ExchangeRateDtoMapper } from './model/coinmarketcap/ExchangeRateDtoMapper';

export function cmcBatchExchangeRepo(
    service: CMCBatchExchangeRateService,
    idMapper: CMCIdMapper,
    respMapper: ExchangeRateDtoMapper
): BatchExchangeRateRepo {
    return {
        getBatchedRate: (currencies) =>
            service
                .getBatchedRate(idMapper.fromDomainList(currencies))
                .then(respMapper.toDomain),
    };
}
