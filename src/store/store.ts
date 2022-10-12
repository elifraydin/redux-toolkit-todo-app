import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import todoSlice from "../features/todoSlice";


//yeni store oluşturuyoruz
export const store=configureStore({
reducer:{
    todos:todoSlice,
},
})

//TYPE EXPORT 

//RootState bizim Global state'imizin type'ını tanımlıyor
//Reducer içine girdiğimiz state ya da slice'ların type'ları otomatik olarak slice'lardan alınır
// ve tek bir RootState type'ı olarak döndürülür
export type RootState = ReturnType<typeof store.getState>

//useAppDispatch hook'unu oluştururken kullanıcaz
export type AppDispatch = typeof store.dispatch

//METHOD EXPORT

//Bize useDispatch'i döndğrecek ve type olarak AppDispatch
//useAppDispatch'i her kullandığımda type'ını girmeme gerek yok
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;