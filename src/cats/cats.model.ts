import { ApiModelProperty } from '@nestjs/swagger';

import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
});

export class Cat{
    @ApiModelProperty()
    readonly id:string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly age: number
}