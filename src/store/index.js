import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./reducers/userReducer";
import drawerReducer from "./reducers/drawerReducer";


export const store = configureStore({
    reducer : {

        user : userReducer,
        drawer : drawerReducer,

    }
})
