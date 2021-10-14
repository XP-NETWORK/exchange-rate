export * as NetworkModel from "./network";
export * from "./domain";
export * as CMCModel from "./coinmarketcap";

export type BaseBatchExchangeRateService<CurrenciesDto, ERDto> = {
    getBatchedRate(curencies: CurrenciesDto[]): Promise<ERDto>;
};
