// Global import
import * as React from 'react';
import { SFC, TableHTMLAttributes } from 'react';

export interface TableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {}

export const TableHead: SFC<TableHeadProps> = ({ children }) => <thead>{children}</thead>;
