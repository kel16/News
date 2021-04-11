export interface ICategoryState {
  categories: ICategory[];
  selected: Record<string, string[]>;
  isLoading: boolean;
  error: string;
}

export interface ICategory extends ISubcategory {
  subcategories: ISubcategory[];
}

export interface ISubcategory {
  id: string;
  title: string;
}
