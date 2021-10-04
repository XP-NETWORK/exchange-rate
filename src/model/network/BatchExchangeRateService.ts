import axios, { AxiosResponse } from "axios";
import { BaseBatchExchangeRateService } from "..";
import { SupportedCurrency } from "../domain";
import { ExchangeRateDto } from "./ExchangeRateDto";

export type NetworkBatchExchangeRateService = BaseBatchExchangeRateService<SupportedCurrency, ExchangeRateDto>;

export function networkBatchExchangeRateService(baseURL: string) {
    const client = axios.create({
        baseURL,
        headers: {
            Accept: 'application/json',
        }
    });

    return {
        async getBatchedRate(): Promise<ExchangeRateDto> {
            const res: AxiosResponse<ExchangeRateDto> = await client.get("/batch_data");

            return res.data;
        }
    }
}