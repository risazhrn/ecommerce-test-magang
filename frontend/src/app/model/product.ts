export class Product{
    id!: number;
    name!: string;
    categoryId!: number;
    stock!: number;
    categoryName!: string;
    description!: string;
    price!: number;
    urlImage!: string;
}

export class ProductInput{
    name!: string;
    categoryId!: number;
    stock!: number;
    description!: string;
    price!: number;
    urlImage!: string;
}