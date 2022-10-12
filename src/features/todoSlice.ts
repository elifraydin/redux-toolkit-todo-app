import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TodoObject } from "../types/interface"
import { v4 } from "uuid"


const initialState: TodoObject[] = []; //todo'lar bir diziden oluşacak ve global state'de todos adında tutulacak

export const todoSlice = createSlice({
    name: "todos", //global state içinde bu slice'ın tutulacağı isim
    initialState,

    reducers: {
        //2 parametre alır. bunun içinde state'i manipule ediyorsun
        //PayloadAction sadece title, yani string
        add: (state, action: PayloadAction<string>) => {
            const newtodo = {
                id: v4(),
                title: action.payload,
                complated: false
            }
            state.push(newtodo)
        },
        //todo'nun id'sini alır
        remove: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        //todo'nun id'sini alır
        toggleComplated: (state, action: PayloadAction<string>) => {
            return state.map((todo) =>
                todo.id === action.payload
                    ? {...todo, complated: !todo.complated }
                    : todo
            )
        }
    }

})

//todoSlice'ı export edip store içine kaydedelim
export default todoSlice.reducer

//bir component içinde add'i kullanabiliriz
export const { add, remove, toggleComplated } = todoSlice.actions
