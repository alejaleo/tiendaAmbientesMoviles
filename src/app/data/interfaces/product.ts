import { Rating } from "./rating";

export interface Product{
  id: number | string;
  title:string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:Rating
}
