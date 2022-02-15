import * as yup from "yup";

export const product_schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  price: yup.number().required().positive(),
  currency: yup.string().default("CAD"),
  brand: yup.string(),
  seller: yup.string(),
  other: yup.object(),
  stock: yup.number().required().integer(),
});

export const filter_schema = yup.object().shape({
  name: yup.string(),
  price: yup.number().positive(),
  limit: yup.number().positive().integer().default(20),
  skip: yup.number().positive().integer().default(0) 
})


export type Filter = yup.InferType<typeof filter_schema>;
export type Product = yup.InferType<typeof product_schema>;
