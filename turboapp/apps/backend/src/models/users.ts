import * as yup from "yup";

export const user_schema = yup
    .object()
    .shape({
        user_id: yup.number(),
        name: yup.string().required(),
        password: yup.string().required(),
        seller: yup.boolean(),
        age: yup.number().required().positive().integer(),
        email: yup.string().email(),
        address: yup.string().required(),
    })
    .required();

export type User = yup.InferType<typeof user_schema>;
