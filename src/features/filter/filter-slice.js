import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: '@@filter',
    initialState: [],
    reducers: {
        addFilter: (state, action) => {
            if (!state.includes(action.payload)) {
                // если фильтра в стейте нет то мутируем стейт,
                // пушим фильтр
                state.push(action.payload);
            }
            // в противном случае ничего не меняется
        },
        removeFilter: (state, action) => {
            // нам нужно мутировать стейт, отфильтровать, удалить из стейта все позиции, 
            // которые не ранвы выбраному фильтру. Но фильтр не мутирует, а создает новый массив
            // поэтому делаем ретерн
            return state.filter(item => item !== action.payload);
        },
        clearFilter: () => [],
    }
});

// во внешний мир єкспортируем все єкшны
export const {addFilter, removeFilter, clearFilter} = filterSlice.actions;

// также єкспортируем фильтр редюсер
export const filterReducer = filterSlice.reducer;

// также переносим сюда селектор
export const selectFilters = (state) => state.filters; // filters - ключ филтерРедюсера из комбаина в сторе
