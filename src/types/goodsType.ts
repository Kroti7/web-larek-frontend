export interface IItem {
  id: number;
  name: string;
  description: string;
  tag: string;
  image: string;
  price: number;
  quantity?: number;
}