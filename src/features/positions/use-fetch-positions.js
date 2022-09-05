// кастомный хук для реалиозации получения данных
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPositions } from './position-slice';
import data from '../../mock/data.json';

export const useFetchPositions = () => {
    // обычно юзЭффект используем для получекния данных путем асинхронного запроса, 
    // мы будем получать данные из уже имеющегося json файла
    // для єтого воспользуемся диспачем
    const dispath = useDispatch();

    // загружаем данные
    useEffect(() => {
        // приложение смонтировалось, выполняем диспач, в нем выполняем редюсер (добавить позиции) и передаем в него данные data
        dispath(addPositions(data)) // теперь в редакс-приложении есть данные
        // эти данные нам нужны в компоненте jobList
    }, [dispath]);
}
