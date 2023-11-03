import { ILambdaValues } from "./IlambdaValues";

export class LambdaValues implements ILambdaValues {
    private static readonly defaultHcv: number = 1.8;
    private static readonly defaultOcv: number = 0.017;
    private static readonly defaultK1: number = 6.0;
    private _hc: number | null = null;
    private _co: number | null = null;
    private _co2: number | null = null;
    private _o2: number | null = null;
    private _hcv: number | null = LambdaValues.defaultHcv;
    private _ocv: number | null = LambdaValues.defaultOcv;
    private _k1: number | null = LambdaValues.defaultK1;
    constructor(hc?: number | null, co?: number | null, co2?: number | null,
        o2?: number | null, hcv?: number | null, ocv?: number | null, k1?: number | null) {
        if (hc) this._hc = hc;
        if (co) this._co = co;
        if (co2) this._co2 = co2;
        if (o2) this._o2 = o2;
        if (hcv) this._hcv = hcv;
        if (ocv) this._ocv = ocv;
        if (k1) this._k1 = k1;
        return new Proxy(this, LambdaValues.indexedHandler);
    }

    get Hc(): number | null {
        return this._hc;
    }
    set Hc(value: number | null) {
        this._hc = value;
    }
    get Co(): number | null {
        return this._co;
    }
    set Co(value: number | null) {
        this._co = value;
    }
    get Co2(): number | null {
        return this._co2;
    }
    set Co2(value: number | null) {
        this._co2 = value;
    }
    get O2(): number | null {
        return this._o2;
    }
    set O2(value: number | null) {
        this._o2 = value;
    }
    get Hcv(): number | null {
        return this._hcv;
    }
    set Hcv(value: number | null) {
        this._hc = value ?? LambdaValues.defaultHcv;
    }
    get Ocv(): number | null {
        return this._ocv;
    }
    set Ocv(value: number | null) {
        this._ocv = value ?? LambdaValues.defaultOcv;
    }
    get K1(): number | null {
        return this._k1;
    }
    set K1(value: number | null) {
        this._k1 = value ?? LambdaValues.defaultK1;
    }

    /**
     * constant K: water gas equilibrium constant 
     */
    public readonly K: number = 3.5; 
    public readonly K_desc: string = 'WATER GAS EQUILIBRIUM CONSTANT';
    public readonly HC_desc: string = 'HYDROCARBONS';
    public readonly CO_desc: string = 'CARBON MONOXIDE';
    public readonly CO2_desc: string = 'CARBON DIOXIDE';
    public readonly O2_desc: string = 'OXYGEN';
    public readonly HCV_desc: string = 'ATOMIC RATIO OF HYDROGEN TO CARBON IN FUEL';
    public readonly OCV_desc: string = 'ATOMIC RATIO OF OXYGEN TO CARBON IN FUEL';
    public readonly K1_desc: string = 'CONVERSION FACTOR FROM FID TO NDIR';// (6 for Hexane aka gas, 3 for Propane aka LPG, 1 for Methane aka CNG)';

    isValid(): boolean {
        return this._co != null && this._co2 != null && this._hc != null && this._hcv != null && this._k1 != null && this._o2 != null && this._ocv != null;
    }

    [name: string | symbol]: any;
    private static indexedHandler: ProxyHandler<LambdaValues> = {
        get(target, property) {
            return target[property];
        },
        set(target, property, value): boolean {
            target[property] = value;
            return true;
        }
    };

    readIndexedProp = (prop: string | symbol): any => {
        return this[prop];
    }

    updateFrom(val: ILambdaValues): void {
        const myProps: Array<string> = Object.keys(this);
        Object.entries(val).forEach(([key, value])=> {
            if (myProps.indexOf(key) > -1)
                this[key] = value;
        });
    }
}