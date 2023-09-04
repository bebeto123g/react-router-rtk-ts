import React, { DragEventHandler, useMemo, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { IBasicTableColumns, IBasicTableProps } from './interfaces';

export const BasicTable = (props: IBasicTableProps) => {
    const { minWidth = 'auto', columns, data } = props;
    const [dragOver, setDragOver] = useState('');

    const columnsMap = useMemo<Record<string, IBasicTableColumns>>(() => {
        return columns.reduce((acc, column) => ({ ...acc, [column.key]: column }), {});
    }, [columns]);

    const sortKeyColumns = useMemo(() => {
        return columns.sort((a, b) => a.order - b.order).map(({ key }) => key);
    }, [columns]);

    const [sortKeyColumnsMap, setSortKeyColumnsMap] = useState(sortKeyColumns);

    const handleDragStart: DragEventHandler<HTMLTableCellElement> = (e) => {
        // @ts-ignore
        const id = e.target.id as string;
        const idx = sortKeyColumnsMap.indexOf(id);
        e.dataTransfer.setData('colIdx', String(idx));
    };

    const handleDragOver: DragEventHandler<HTMLTableCellElement> = (e) => e.preventDefault();

    const handleDragEnter: DragEventHandler<HTMLTableCellElement> = (e) => {
        // @ts-ignore
        const id = e.target.id as string;
        setDragOver(id);
    };

    const handleOnDrop: DragEventHandler<HTMLTableCellElement> = (e) => {
        // @ts-ignore
        const id = e.target.id as string;
        const droppedColIdx = sortKeyColumnsMap.indexOf(id);
        const draggedColIdx = +e.dataTransfer.getData('colIdx');
        if (droppedColIdx !== draggedColIdx) {
            setSortKeyColumnsMap((prev) => {
                const tempColumnsMap = [...prev];
                tempColumnsMap[draggedColIdx] = prev[droppedColIdx];
                tempColumnsMap[droppedColIdx] = prev[draggedColIdx];
                return tempColumnsMap;
            });
        }
        setDragOver('');
    };

    return (
        <TableContainer>
            <Table sx={{ minWidth }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {sortKeyColumnsMap.map((key, index) => {
                            const column = columnsMap[key];
                            return (
                                <TableCell
                                    id={column.key}
                                    key={column.key}
                                    align={!index ? 'left' : 'right'}
                                    draggable
                                    onDragStart={handleDragStart}
                                    onDragOver={handleDragOver}
                                    onDrop={handleOnDrop}
                                    onDragEnter={handleDragEnter}
                                    sx={{
                                        borderLeft: column.key === dragOver ? '5px solid red' : '',
                                        ...column.styles,
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            {sortKeyColumnsMap.map((key, index) => {
                                const column = columnsMap[key];
                                return (
                                    <TableCell key={column.key + row.id} align={!index ? 'left' : 'right'}>
                                        {row[column.key] || ''}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
