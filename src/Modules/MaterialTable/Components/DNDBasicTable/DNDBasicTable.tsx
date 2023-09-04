import React from 'react';
import { BasicTable } from 'Common/UIKit/Table';
import { BasicTableColumns, BasicTableData } from './constants';

export const DNDBasicTable = () => {
    return <BasicTable minWidth={650} data={BasicTableData} columns={BasicTableColumns} />;
};
