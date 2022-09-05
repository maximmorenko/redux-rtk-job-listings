// теперь данные достаем не из мока а из нашего созданого селектора с использованием useSelector
import { useDispatch } from 'react-redux';

import { JobPosition } from '../../features/positions/JobPosition';
import { addFilter } from 'features/filter/filter-slice';
import { useFetchPositions } from './use-fetch-positions';
import { usePositions } from './use-positions';



// на уровне джоб листа нам также нужны актуальные фильтры, досанем их из селектора
const JobList = () => {
    // получаем данные
    useFetchPositions(); 

    // фильтруем позици, usePositions() кастомный хук для фильтрации. вызываем его
    const positions = usePositions();

    const dispatch = useDispatch();
    // чтобы повесить экшн (событие клика) на на конкретный бедж, нужна функция
    // сделаем ее на уровне списка и передадим ниже
    const handleAddFilter = (filter) => {
        // функция будет вызывать диспечер, диспечер будет вызывать экшн криэйтор, 
        // и в экшн передаем полученый фильтр
        dispatch(addFilter(filter));
    };

    return (
        <div className='job-list'>
            {positions.map(item => (
                <JobPosition 
                    key={item.id} 
                    handleAddFilter={handleAddFilter} 
                    {...item} 
                />
            ))}
        </div>
    )
}

export {JobList};
