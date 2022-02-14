import * as yup from 'yup';

export const user_schema = yup.object().shape({
    name: yup.string().required(),
    type: yup.string().oneOf(['buyer', 'seller']),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    address: yup.string(),
    shopping_cart: yup.array().of(yup.string()).default([])
});

export type User = yup.InferType<typeof user_schema>;
