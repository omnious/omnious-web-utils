// Global import
import * as React from 'react';
import { SFC, TableHTMLAttributes } from 'react';

export interface TableBodyProps extends TableHTMLAttributes<HTMLTableSectionElement> {}

export const TableBody: SFC<TableBodyProps> = ({ children }) => <tbody>{children}</tbody>;
