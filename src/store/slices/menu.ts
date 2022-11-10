import { createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "../../types";

const initialState: MenuItem[] = [
    {
        id: 1,
        label: "Women's",
        href: "/catalog/womens"
    },
    {
        id: 2,
        label: "Men's",
        href: "/catalog/mans"
    },
    {
        id: 3,
        label: "Home",
        href: "/home"
    },
    {
        id: 4,
        label: "Travel",
        href: "/catalog/travel"
    }, {
        id: 5,
        label: "Beauty",
        href: "/catalog/beauty"
    }, {
        id: 6,
        label: "Sale",
        href: "/catalog/sale"
    }
]

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {}
})


export default menu.reducer