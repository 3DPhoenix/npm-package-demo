"use client"

export interface SidebarProps {
  title: string
}

export default function Sidebar({ title }: Readonly<SidebarProps>) {
  return (<div>{title}</div>)
}
