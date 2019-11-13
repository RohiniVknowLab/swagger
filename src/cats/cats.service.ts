import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'

import { Cat } from './cats.model';


@Injectable()
export class CatsService {
    constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>){        
    }

    async addCat(cat: Cat){
        try {
            const catToAdd = this.catModel(cat);
            var savedCat = await catToAdd.save();
            return {id: savedCat.id};
             
        }
        catch{
            throw new InternalServerErrorException('An error occured while adding the cat.');
        }
    }

}
