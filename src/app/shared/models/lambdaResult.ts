import { ILambdaValues } from "./IlambdaValues";
import { LambdaValues } from "./lambdaValues";

export class LambdaResult extends LambdaValues {
    Lambda: number | null = null;
    Afr: string | null = null;
    Status: string | null = null;
}