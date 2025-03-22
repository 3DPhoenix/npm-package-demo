"use client";

import {
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from "react";

export interface SidebarProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  list?: Array<ReactNode>;
  open: boolean;
  title: string;
  version?: string;
  onClose?: MouseEventHandler<HTMLButtonElement>;
}

export default function Sidebar({
  children,
  className,
  list,
  onClose,
  open,
  title,
  version,
  ...rest
}: Readonly<SidebarProps>) {
  return (
    <div
      className={
        className +
        " z-10 flex bg-white flex-col h-full flex-1 items-center py-3 text-black shadow-xl transition-all duration-300 ease-out " +
        (open ? "" : " -translate-x-[100%] ")
      }
      {...rest}
    >
      <button
        className="absolute top-0 right-0 m-2 aspect-square visible sm:hidden cursor-pointer"
        onClick={onClose}
      >
        Close
      </button>
      <span className="self-center m-5 text-2xl">{title}</span>
      <div className="flex-1">{children}</div>
      {/* <ul className="flex-1">{list.map((list) => list)}</ul> */}
      {version && <div>Version: {version}</div>}
    </div>
  );
}
