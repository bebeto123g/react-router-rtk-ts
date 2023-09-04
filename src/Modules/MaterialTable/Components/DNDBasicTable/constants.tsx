import { Checkbox } from '@mui/material';
import { IBasicTableColumns, IBasicTableData } from 'Common/UIKit/Table';

export const BasicTableColumns: IBasicTableColumns[] = [
    {
        label: 'Действие',
        key: 'action',
        order: 1,
        styles: {
            width: '100px',
        },
    },
    { label: 'Имя', key: 'name', order: 2 },
    { label: 'Гражданство', key: 'citizenship', order: 7 },
    { label: 'Должность', key: 'job', order: 3 },
    { label: 'Возраст', key: 'age', order: 4 },
    { label: 'Стаж', key: 'experience', order: 6 },
];

export const BasicTableData: IBasicTableData[] = [
    {
        id: '1',
        name: 'Пуппа',
        citizenship: 'РФ',
        job: 'Менеджер',
        age: '40',
        experience: '6',
        action: <Checkbox />,
    },
    {
        id: '2',
        name: 'Инокентий',
        citizenship: 'РФ',
        job: 'Аналитик',
        age: '34',
        experience: '4',
        action: <Checkbox />,
    },
    {
        id: '3',
        name: 'Ильич',
        citizenship: 'СССР',
        job: 'Руководитель',
        age: 'Вечно молодой',
        experience: '100',
        action: <Checkbox />,
    },
    {
        id: '4',
        name: 'Аристах',
        citizenship: 'РФ',
        job: 'Мученик',
        age: '21',
        experience: '5',
        action: <Checkbox />,
    },
    {
        id: '5',
        name: 'Луппа',
        citizenship: 'РФ',
        job: 'Менеджер',
        age: '40',
        experience: '7',
        action: <Checkbox />,
    },
];
