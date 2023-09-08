import React from 'react';
import { BasicTable } from 'Common/Widgets/Table';
import { BasicTableColumns, BasicTableData } from './constants';

export const DNDBasicTable = () => {
    return <BasicTable minWidth={650} data={BasicTableData} columns={BasicTableColumns} />;
};
