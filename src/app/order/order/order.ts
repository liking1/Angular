import { Product } from "./product";

export class Order {
    id: number;
    products: Product[];
    status: Status;
}

export enum Status {
    InProcess,
    Canceled,
    Processed
}