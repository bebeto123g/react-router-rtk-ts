import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';

export interface IBasicTableColumns {
    label: string;
    key: string;
    order: number;
    styles?: SxProps<Theme>;
}

interface IRequiredId {
    id: string;
}

export interface IBasicTableData extends IRequiredId {
    [key: string]: ReactNode;
}

export interface IBasicTableProps {
    minWidth?: number | string;
    columns: IBasicTableColumns[];
    data: IBasicTableData[];
}
