import React, { useMemo } from 'react';
import { type MRT_ColumnDef, MaterialReactTable } from 'material-react-table';
import { type IPerson, data } from './makeData';

export const MaterialReactTableExample = () => {
    const columns = useMemo<MRT_ColumnDef<IPerson>[]>(
        () => [
            {
                accessorKey: 'firstName',
                header: 'First Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
            },
            //column definitions...
            {
                accessorKey: 'address',
                header: 'Address',
            },
            {
                accessorKey: 'city',
                header: 'City',
            },
            //end
            {
                accessorKey: 'state',
                enableColumnOrdering: false, //disable column ordering for this column,
                header: 'State',
            },
        ],
        []
    );

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            enableColumnOrdering
            enableRowSelection
            muiTablePaperProps={{
                sx: { boxShadow: 'none' },
            }}
        />
    );
};
