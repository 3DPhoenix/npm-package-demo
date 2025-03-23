import * as react from 'react';
import { PropsWithChildren, HTMLAttributes, ReactNode, MouseEventHandler } from 'react';

type Route<TPathType = string> = {
    path: string;
    pathname: string;
    pathType?: TPathType;
};
interface NavbarProps {
    className?: string;
    /** Url for an icon. If undefined the Image-tag is hidden. */
    iconUrl?: string;
    /** Actual pathName to highlight active Link in Navbar */
    pathName: string;
    /** route-objects to show in navigation as links with display title*/
    navRoutes: Array<Route>;
    /** title to display in Navbar */
    title: string;
    /** subtitle to display in Navbar */
    subtitle?: string;
}
/**
 * Navbar
 */
declare function Navbar({ className, iconUrl, navRoutes, subtitle, title, pathName }: Readonly<NavbarProps>): react.JSX.Element;

declare function NavigationElement({ children }: Readonly<PropsWithChildren>): react.JSX.Element;

interface SidebarProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    list?: Array<ReactNode>;
    open: boolean;
    title: string;
    version?: string;
    onClose?: MouseEventHandler<HTMLButtonElement>;
}
declare function Sidebar({ children, className, list, onClose, open, title, version, ...rest }: Readonly<SidebarProps>): react.JSX.Element;

export { Navbar, NavigationElement, Sidebar };
