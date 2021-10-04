import axios, { AxiosResponse } from 'axios';
import { BaseBatchExchangeRateService } from '..';
import { CMCId } from './CMCId';
import { ExchangeRateDto } from './ExchangeRateDto';

export type CMCBatchExchangeRateService = BaseBatchExchangeRateService<CMCId, ExchangeRateDto>;

export function cmcBatchExchangeRateService(
    apiUri: string,
    apiKey: string
): CMCBatchExchangeRateService {
    const client = axios.create({
        baseURL: apiUri,
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
            Accept: 'application/json',
            'Accept-Encoding': 'deflate, gzip',
        },
    });

    return {
        async getBatchedRate(currencies: CMCId[]): Promise<ExchangeRateDto> {
            const res: AxiosResponse<ExchangeRateDto> = await client.get(
                '/v1/cryptocurrency/quotes/latest',
                {
                    params: {
                        id: currencies.join(','),
                    },
                }
            );
            const data = res.data;
            if (data.status.error_code != 0) {
                throw Error(
                    `failed to fetch exchange rate ${data.status.error_message}`
                );
            }

            return data;
        },
    };
}
