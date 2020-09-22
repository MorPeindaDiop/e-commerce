import { Identifier } from 'typescript';
import { Sneakers } from './sneakers';

export interface CustomSneakers {
    sneakers: Sneakers;
    userId:number;
    id: number;
    brand: string;
    price:number;
    color:string;
    img: string;
}