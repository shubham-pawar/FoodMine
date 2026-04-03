export class Food{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite = false;
    stars = 0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}