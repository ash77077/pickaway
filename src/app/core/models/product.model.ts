export interface IStoreByCoffees {
  parentId: number;
  parentName: string;
  parentImg: string;
  coffees: ICoffees
}

export interface ICoffees {
  id: string;
  name: string;
  subName: string;
  img: string;
  isFavorite: boolean;
  price: number;
  currency: string;
}
