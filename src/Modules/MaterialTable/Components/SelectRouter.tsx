import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, MenuItem, OutlinedInput } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import { EMaterialTableRouterPaths } from '../Enums';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

interface ITableSelectRoutes {
    name: string;
    path: EMaterialTableRouterPaths;
}

const TABLE_ROUTES: ITableSelectRoutes[] = [
    { name: 'Default', path: EMaterialTableRouterPaths.DEFAULT },
    { name: 'Basic Table', path: EMaterialTableRouterPaths.BASIC },
    { name: 'Collabsible Table', path: EMaterialTableRouterPaths.COLLAPSIBLE },
    { name: 'Data Table', path: EMaterialTableRouterPaths.DATA },
    { name: 'Sorting Table', path: EMaterialTableRouterPaths.SORTING },
    { name: 'Stycky Header Table', path: EMaterialTableRouterPaths.STICKY_HEADER },
    { name: 'Virtualized Table', path: EMaterialTableRouterPaths.VIRTUALIZED },
    { name: 'Material Example Table', path: EMaterialTableRouterPaths.MATERIAL_REACT },
];

function getStyles(path: EMaterialTableRouterPaths, route: EMaterialTableRouterPaths, theme: Theme) {
    return {
        fontWeight:
            route.indexOf(path) === -1 || !path
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightBold,
    };
}

export const SelectRouter = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [route, setRoute] = React.useState(EMaterialTableRouterPaths.DEFAULT);

    const handleChange = (event: SelectChangeEvent<EMaterialTableRouterPaths>) => {
        const value = event.target.value as EMaterialTableRouterPaths;
        setRoute(value);
        navigate(value as string);
    };

    useEffect(() => {
        const { pathname } = location;
        const currentPath = Object.values(EMaterialTableRouterPaths).find(
            (path) => path && pathname.includes(path)
        );

        if (currentPath) {
            setRoute(currentPath);
        }
    }, [location]);

    return (
        <div>
            <FormControl sx={{ m: 5, width: 500, marginLeft: 0 }}>
                <InputLabel id="demo-multiple-name-label">Таблица</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={route}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {TABLE_ROUTES.map(({ name, path }) => (
                        <MenuItem key={path} value={path} style={getStyles(path, route, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};
