import * as yup from "yup";

export const user_schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    seller: yup.boolean(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    address: yup.string().required(),
});

export type User = yup.InferType<typeof user_schema>;
