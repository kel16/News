export interface ICategoriesResponse extends ISubcategory {
  subcategories: ISubcategory[];
}

interface ISubcategory {
  id: string;
  title: string;
}
