// создадим кастомный хук для фильтрации позиций
import { useSelector } from 'react-redux';

import { selectVisiblePositions } from './position-slice';
import { selectFilters } from '../filter/filter-slice';

export const usePositions = () => {

    const currentFilters = useSelector(selectFilters); // все актуальные фильтры
    // const positions = useSelector(selectAllPositions); // до сих пор мы отрисовывали все позиции, 
    // сделаем так чтобы отрисовывались только отфильтрованые, для этого возьмем наш стейт, 
    // вывзываем селектор актуальных позиций (функцию фильтрации) и передаем в нее актуальный стейт и актуальные фильтры
    // мы должны передать актуальные фильтры, потому что мы не можем создавать селекторы, которые получали бы любое количество параметров, 
    // если больше одного, то вотрой передаем вручную 
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

    return positions;
}
