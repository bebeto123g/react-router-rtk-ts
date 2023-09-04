import { RouteObject } from 'react-router-dom';
import { CollapsibleTable } from '../Components/CollapsibleTable';
import { DataTable } from '../Components/DataTable';
import { DNDBasicTable } from '../Components/DNDBasicTable/DNDBasicTable';
import { MaterialReactTableExample } from '../Components/MaterialReactTable/MaterialReactTable';
import { SortingTable } from '../Components/SortingTable';
import { StickyHeadTable } from '../Components/StickyHeaderTable';
import { VirtualizedTable } from '../Components/VirtualizedTable';
import { EMaterialTableRouterPaths } from '../Enums';

export const MaterialTableRoutes: RouteObject[] = [
    {
        path: EMaterialTableRouterPaths.DEFAULT,
        element: <div>Выберите таблицу</div>,
    },
    {
        path: EMaterialTableRouterPaths.BASIC,
        element: <DNDBasicTable />,
    },
    {
        path: EMaterialTableRouterPaths.COLLAPSIBLE,
        element: <CollapsibleTable />,
    },
    {
        path: EMaterialTableRouterPaths.DATA,
        element: <DataTable />,
    },
    {
        path: EMaterialTableRouterPaths.SORTING,
        element: <SortingTable />,
    },
    {
        path: EMaterialTableRouterPaths.STICKY_HEADER,
        element: <StickyHeadTable />,
    },
    {
        path: EMaterialTableRouterPaths.VIRTIALIZED,
        element: <VirtualizedTable />,
    },
    {
        path: EMaterialTableRouterPaths.MATERIAL_REACT,
        element: <MaterialReactTableExample />,
    },
];
