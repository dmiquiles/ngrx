import { createReducer, on } from "@ngrx/store";
import { IShoppingListState } from "./shopping-list.state";
import { loadShoppingList, loadShoppingListError, loadShoppingListSuccess } from "./shopping-list.actions";

export const initialState: IShoppingListState = {
    entities: [
        {id: 1, name: 'Banana', amount: 10},
        {id: 2, name: 'Grape', amount: 2},
    ],
    isLoading: false
}

export const ShoppingListReducer = createReducer(
    initialState,
    on(loadShoppingList, (state) => ({
        ...state,
        isLoading: true
    })),
    on(loadShoppingListSuccess, (state, { entities }) => ({
        ...state,
        isLoading: false,
        entities
    })),
    on(loadShoppingListError, (state) => ({
        ...state,
        isLoading: false
    })),

)