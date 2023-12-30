import { IsInt, IsString } from 'class-validator';
import { Cat } from "../interfaces/cat/cat.interface";

export class CreateCatDto {
    
    @IsString()
    readonly name: Cat['name'];

    @IsInt()
    readonly age: Cat['age'];

    @IsString()
    readonly breed: Cat['breed']
    
}