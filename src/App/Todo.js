import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    task: "",
    up: "",
    id: "",
}

export const Todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        ad: (state, action) => {
            state.task = action.payload;
        },
        increment: (state, action) => {
            state.value = action.payload;
        },
        update: (state, action) => {
            state.value = action.payload;
        },
        sers: (state, action) => {
            state.value = action.payload;
        },
        All: (state, action) => {
            state.value = action.payload;
        },
        chec: (state, action) => {

            for (let i = 0; i < state.value.length; i++) {
                if (state.value[i].id === action.payload) {
                    if (state.value[i].check === false) {
                        state.value[i].check = true;
                    }
                    else {
                        state.value[i].check = false;
                    }
                }
            }
            localStorage.setItem('data', JSON.stringify(state.value));
            localStorage.setItem('temp', JSON.stringify(state.value));
        },
        cmp: (state, action) => {
            state.value = action.payload;
        },
        imp: (state, action) => {
            state.value = action.payload;
        },
        cng: (state, action) => {
            console.log(action);
            state.task = action.payload.a;
            state.up = "edit"
            state.id = action.payload.ind;
        },
        edit: (state, action) => {
            state.up = ""
            let tmp = JSON.parse(localStorage.getItem('temp'))
            tmp[state.id].val = action.payload;
            state.value[state.id].val = action.payload;
            localStorage.setItem('data', JSON.stringify(state.value));
            localStorage.setItem('temp', JSON.stringify(tmp));
            state.id = "";
        }

    },
})

export const { increment, update, sers, All, chec, cmp, imp, ad, cng, edit } = Todo.actions

export default Todo.reducer