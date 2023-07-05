export interface IShoppingListItem {
    id: number;
    name: string;
    amount: number;
}

export interface IShoppingListState {
    entities: IShoppingListItem[];
    isLoading: boolean;
}