export interface ILambdaValues {
    Hc: number | null;
    Co: number | null;
    Co2: number | null;
    O2: number | null;
    Hcv: number | null;
    Ocv: number | null;
    K1: number | null;
    K: number; 
    K_desc: string;
    HC_desc: string;
    CO_desc: string;
    CO2_desc: string;
    O2_desc: string;
    HCV_desc: string;
    OCV_desc: string;
    K1_desc: string;

    isValid(): boolean;
}