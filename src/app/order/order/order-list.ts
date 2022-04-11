import { Order, Status } from "./order";
import { Product } from "./product";

export const orderList: Order[] = [
    {
        id: 1,
        products: [
            {
                id: 1,
                name: "Hello",
                price: 15,
                category: "Nice",
                date: new Date()
            },
            {
                id: 2,
                name: "World",
                price: 15,
                category: "Nice",
                date: new Date()
            },
            {
                id: 3,
                name: "Wassup",
                price: 15,
                category: "Nice",
                date: new Date()
            }
        ],
        status: Status.InProcess
    },
    {
        id: 2,
        products: [
            {
                id: 1,
                name: "Hello",
                price: 15,
                category: "Nice",
                date: new Date()
            },
            {
                id: 2,
                name: "World",
                price: 15,
                category: "Nice",
                date: new Date()
            },
            {
                id: 3,
                name: "Wassup",
                price: 15,
                category: "Nice",
                date: new Date()
            }
        ],
        status: Status.Processed
    },
    {
        id: 3,
        products: [
            {
                id: 1,
                name: "Hello",
                price: 15,
                category: "Nice",
                date: new Date()
            },
            {
                id: 2,
                name: "World",
                price: 15,
                category: "Nice",
                date: new Date()
            },
            {
                id: 3,
                name: "Wassup",
                price: 15,
                category: "Nice",
                date: new Date()
            }
        ],
        status: Status.Canceled
    }
]