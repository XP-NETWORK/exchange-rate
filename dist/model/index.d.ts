export declare type BaseBatchExchangeRateService<CurrenciesDto, ERDto> = {
    getBatchedRate(curencies: CurrenciesDto[]): Promise<ERDto>;
};
