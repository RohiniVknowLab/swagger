import { ApiModelProperty } from '@nestjs/swagger';

import * as mongoose from 'mongoose';

export const SourceSchema = new mongoose.Schema({
    host_name: {type: String, required: true},
    db_name: {type: String, required: true},
    port: {type: Number, required: true},
});

export class Source{
    @ApiModelProperty()
    readonly id:string;

    @ApiModelProperty()
    readonly host_name: string;

    @ApiModelProperty()
    readonly db_name: string;
    
    @ApiModelProperty()
    readonly port: number
}