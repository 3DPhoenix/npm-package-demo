import * as react_jsx_runtime from 'react/jsx-runtime';
import { PropsWithChildren, HTMLAttributes, ReactNode, MouseEventHandler } from 'react';

declare function NavigationElement({ children, }: Readonly<PropsWithChildren>): react_jsx_runtime.JSX.Element;

interface SidebarProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
    list?: Array<ReactNode>;
    open: boolean;
    title: string;
    version?: string;
    onClose?: MouseEventHandler<HTMLButtonElement>;
}
declare function Sidebar({ children, className, list, onClose, open, title, version, ...rest }: Readonly<SidebarProps>): react_jsx_runtime.JSX.Element;

export { NavigationElement, Sidebar };
