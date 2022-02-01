let yup = require('yup');

enum type_enum {
    BUYER = 'buyer',
    SELLER = 'seller'
}; 

export const user_schema = yup.object().shape({
    name: yup.string().required(),
    type: yup.string().oneOf(type_enum),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    address: yup.string().address()
  });
