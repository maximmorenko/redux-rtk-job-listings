import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
    name: '@@position',
    initialState: [],
    reducers: {
        addPositions: (_, action) => action.payload,
    },
});

// во внешний мир єкспортируем все єкшны
export const {addPositions} = positionSlice.actions;

// также єкспортируем фильтр редюсер
export const positionReducer = positionSlice.reducer;

// также переносим сюда селектор
export const selectVisiblePositions = (state, filters = []) => {
    // если фильтров нет, т.е длина массива равна 0, то возвращаем текущие позиции из стейта
    if (filters.length === 0) return state.positions; // positions - ключ positionReducer из комбаина в сторе
    return state.positions.filter(pos => {
        // запишем в переменную набор фильтров привязаных к конкретной позиции.
        // Соберем их также как мы собирали беджи, путем конкатинации
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
        // метод every сопоставляет содержимое массивов, 
        // если строковые значения одинаковы, то возвращает тру и записываем в стейт набор фильтров
        // сравним елементы массивов filters и posFilters
        return filters.every(posfilter => posFilters.includes(posfilter));
    })
};
