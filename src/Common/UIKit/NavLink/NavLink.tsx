import React, { FC } from 'react';
import { NavLinkProps, NavLink as NavLinkRouter } from 'react-router-dom';
import { Utils } from 'Core/Utils';
import styles from './NavLink.module.scss';

interface INavLinkProps extends NavLinkProps {
    className?: string;
}

export const NavLink: FC<INavLinkProps> = (props) => {
    const { children, className = '', ...otherProps } = props;
    const classes = ({ isActive }: { isActive: boolean }) =>
        Utils.classnames([className, styles.link, { [styles.active]: isActive }]);

    return (
        <NavLinkRouter {...otherProps} className={classes}>
            {children}
        </NavLinkRouter>
    );
};
