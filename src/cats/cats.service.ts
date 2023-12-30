import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat/cat.interface';

@Injectable()
export class CatsService {

    private cats = <Cat[]> [];

    create(cat: Cat) {
        this.cats.push(cat)
    }

    findAll() {
        return this.cats
    }

}
