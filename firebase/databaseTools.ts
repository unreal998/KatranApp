import {database} from "./initFirebase";


export const addUser =  (item) => {
    database.ref('/usersData').push({
        name: item
    });
};