 

import { combineReducers} from "redux"

import persistReducer from "redux-persist/es/persistReducer"

import storage from "redux-persist/lib/storage"
import { createResetMetaReducer } from 'redux-reset-meta';

// import AddToCart from "./slices/AddToCart"

 

const resetSlices=[

    "AddToCart",

]

const RootReducer = createResetMetaReducer(
    "Global_Reset",
    resetSlices
)(

    combineReducers({

// AddToCart:AddToCart

    })

)

const persistConfig={

    key:"root",

    storage,

    whiteList:resetSlices,

}

export default persistReducer(persistConfig,RootReducer)