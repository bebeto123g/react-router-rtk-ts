import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';

interface IData {
    calories: number;
    carbs: number;
    dessert: string;
    fat: number;
    id: number;
    protein: number;
}

interface IColumnData {
    dataKey: keyof IData;
    label: string;
    numeric?: boolean;
    width: number;
}

type TSample = [string, number, number, number, number];

const sample: readonly TSample[] = [
    ['Frozen yoghurt', 159, 6.0, 24, 4.0],
    ['Ice cream sandwich', 237, 9.0, 37, 4.3],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(
    id: number,
    dessert: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
): IData {
    return { id, dessert, calories, fat, carbs, protein };
}

const columns: IColumnData[] = [
    {
        width: 200,
        label: 'Dessert',
        dataKey: 'dessert',
    },
    {
        width: 120,
        label: 'Calories\u00A0(g)',
        dataKey: 'calories',
        numeric: true,
    },
    {
        width: 120,
        label: 'Fat\u00A0(g)',
        dataKey: 'fat',
        numeric: true,
    },
    {
        width: 120,
        label: 'Carbs\u00A0(g)',
        dataKey: 'carbs',
        numeric: true,
    },
    {
        width: 120,
        label: 'Protein\u00A0(g)',
        dataKey: 'protein',
        numeric: true,
    },
];

const rows: IData[] = Array.from({ length: 200 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(index, ...randomSelection);
});

const VirtuosoTableComponents: TableComponents<IData> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    ['Table']: (props: any) => <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />,
    TableHead,
    ['TableRow']: ({ item: _item, ...props }: any) => <TableRow {...props} />,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    style={{ width: column.width }}
                    sx={{
                        backgroundColor: 'background.paper',
                    }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index: number, row: IData) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell key={column.dataKey} align={column.numeric || false ? 'right' : 'left'}>
                    {row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

export const VirtualizedTable = () => {
    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <TableVirtuoso
                data={rows}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
            />
        </Paper>
    );
};
