import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'

import { Source } from './sources.model';


@Injectable()
export class SourcesService {
    constructor(@InjectModel('Source') private readonly sourceModel: Model<Source>){        
    }

    async addSource(source: Source){
        try {
            const sourceToAdd = this.sourceModel(source);
            var savedSource = await sourceToAdd.save();
            return savedSource;
        }
        catch{
            throw new InternalServerErrorException('An error occured while adding the source.');
        }
    }

}
