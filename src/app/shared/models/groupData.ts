import { Group } from "../enums/groups";
import { ILambdaValues } from "./IlambdaValues";
import { LambdaResult } from "./lambdaResult";
import { LambdaValues } from "./lambdaValues";
import { Note } from "./note";

export class GroupData {
    private _lambdaValues: ILambdaValues | null;
    private _group: Group | null;
    private _note: Note;
    private _fixes: Array<ILambdaValues>;

    constructor(group: Group, lambdaValues?: ILambdaValues) {
        if (lambdaValues)
            this._lambdaValues = lambdaValues;
        else this._lambdaValues = null;
        this._group = group;
        this._note = new Note();
        this._fixes = new Array<ILambdaValues>();
    }

    get lambdaValues(): ILambdaValues | null {
        // if (!this._lambdaValues)
        //     this._lambdaValues = new LambdaResult();
        return this._lambdaValues;
    }
    set lambdaValues(value: ILambdaValues) {
        this._lambdaValues = value;
    }

    get group(): Group | null {
        return this._group;
    }
    set group(value: Group) {
        this._group = value;
    }

    get note(): Note {
        return this._note;
    }
    set note(value: string | Note) {
        if (typeof value === 'string')            
            this._note.value = value;
        else this._note = value;
    }

    get fixes(): Array<ILambdaValues> {
        return this._fixes;
    }
}