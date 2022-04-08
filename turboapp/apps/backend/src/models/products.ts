import * as yup from "yup";

export const product_schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string(),
    price: yup.number().required().positive(),
    brand: yup.string(),
    seller: yup.string(),
    stock: yup.number().required().integer(),
    link: yup
        .string()
        .default("turboapp/apps/web/src/assets/images/banana.jpeg"),
    category: yup.string(),
});

export const filter_schema = yup.object().shape({
    name: yup.string(),
    category: yup.string(),
    price: yup.number().positive(),
    limit: yup.number().positive().integer().default(20),
    skip: yup.number().integer().default(0),
});

export type Filter = yup.InferType<typeof filter_schema>;
export type Product = yup.InferType<typeof product_schema>;
