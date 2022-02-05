let user_db: any = {
    "jim_1": {
        "name": "jim",
        "type": "buyer",
        "age": 69,
        "email": "jim_dn@gmail.com",
        "address": "Homeless"
    },
    "alex_1": {
        "name": "alex",
        "type": "buyer",
        "age": 96,
        "email": "alex_dn@gmail.com",
        "address": "Homemore"
    },
}

export function find_user_by_id(user_id: string){
    try {
        return user_db[user_id];
    } catch (err: any) {
        return null;
    }
}

export function create_user(user: any){
    try {
        user_db[user.name] = user
    } catch (err: any) {
        return null;
    }
    return user_db[user.name];
}
