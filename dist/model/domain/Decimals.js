"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalsByNonce = exports.DecimalsByCurrency = void 0;
exports.DecimalsByCurrency = {
    EGLD: 1e18,
    HT: 1e18,
    BNB: 1e18,
    ETH: 1e18,
    AVAX: 1e18,
    MATIC: 1e18,
    FTM: 1e18,
    TRX: 1e6,
    CELO: 1e18,
    ONE: 1e18,
    ONT: 1e18,
    XDAI: 1e18,
    ALGO: 1e6,
    FUSE: 1e18,
    OPL: 1e18,
    XTZ: 1e6,
    VLX: 1e18,
    IOTX: 1e18,
    AURORA: 1e18,
    VET: 1e18,
    CKB: 1e18,
    GT: 1e18,
    SCRT: 1e6,
    SOL: 1e9,
    TON: 1e9,
    ICP: 1e8,
    HBAR: 1e8,
    SKL: 1e18,
    NEAR: 1e24,
    GLMR: 1e18,
    ABEY: 1e18,
    APTOS: 1e8,
    CMP: 1e18,
    OKT: 1e18,
    CSPR: 1e9,
    NGR: 1e18,
};
exports.DecimalsByNonce = {
    2: 1e18,
    3: 1e18,
    4: 1e18,
    5: 1e18,
    6: 1e18,
    7: 1e18,
    8: 1e18,
    9: 1e6,
    0xb: 1e18,
    0xc: 1e18,
    0xd: 1e18,
    0xe: 1e18,
    0xf: 1e6,
    0x10: 1e18,
    0x11: 1e18,
    0x12: 1e6,
    0x13: 1e18,
    0x14: 1e18,
    0x15: 1e18,
    0x16: 1e18,
    0x17: 1e18,
    0x18: 1e6,
    0x19: 1e18,
    0x1a: 1e9,
    0x1b: 1e9,
    0x1c: 1e8,
    0x1d: 1e8,
    0x1e: 1e18,
    0x1f: 1e24,
    0x20: 1e18,
    0x21: 1e18,
    0x22: 1e8,
    0x23: 1e18,
    0x24: 1e18,
    39: 1e9,
    42: 1e18,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjaW1hbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvZG9tYWluL0RlY2ltYWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsa0JBQWtCLEdBQUc7SUFDOUIsSUFBSSxFQUFFLElBQUk7SUFDVixFQUFFLEVBQUUsSUFBSTtJQUNSLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLEtBQUssRUFBRSxJQUFJO0lBQ1gsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsR0FBRztJQUNSLElBQUksRUFBRSxJQUFJO0lBQ1YsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLElBQUk7SUFDWixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsRUFBRSxFQUFFLElBQUk7SUFDUixJQUFJLEVBQUUsR0FBRztJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLElBQUksRUFBRSxHQUFHO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLElBQUk7SUFDVixLQUFLLEVBQUUsR0FBRztJQUNWLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxJQUFJLEVBQUUsR0FBRztJQUNULEdBQUcsRUFBRSxJQUFJO0NBQ0gsQ0FBQztBQUVFLFFBQUEsZUFBZSxHQUFHO0lBQzNCLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLEdBQUc7SUFDTixHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsSUFBSTtJQUNULEdBQUcsRUFBRSxHQUFHO0lBQ1IsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxJQUFJO0lBQ1YsRUFBRSxFQUFFLEdBQUc7SUFDUCxFQUFFLEVBQUUsSUFBSTtDQUNGLENBQUMifQ==