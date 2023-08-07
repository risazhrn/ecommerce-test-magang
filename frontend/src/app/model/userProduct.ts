export class UserProduct{
    id!: number;
    userId!: number;
    productId!: number;
    quantity!: number;
}

export class UserProductInput{
    user_id!: number;
    product_id!: number;
    quantity!: number;
}

export class ListUserTransaction{
    id!: number;
    userId!: number;
    productId!: number;
    quantity!: number;
    userName!: string;
    productName!: string;
    createdAt!: Date;
    urlImage!: string;
}

export class DetailTransaction{
    id!: number;
    userId!: number;
    productId!: number;
    quantity!: number;
    productName!: string;
    createdAt!: Date;
    urlImage!: string;
    categoryName!: string;
    description!: string;
    userName!: string;
    price!: number;
    address!: string;
    phone!: string;
}