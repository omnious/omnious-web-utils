// Global import
import { storiesOf } from '@storybook/react';
import * as React from 'react';

// Local import
import { Table } from './table';

storiesOf('Component | Table', module).add('DIY', () => (
  <Table>
    <Table.Head>
      <Table.Row>
        <Table.HeaderCell>#</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.DataCell>1</Table.DataCell>
        <Table.DataCell>John</Table.DataCell>
      </Table.Row>
    </Table.Body>
    <Table.Foot>
      <Table.Row>
        <Table.DataCell>Foot</Table.DataCell>
        <Table.DataCell>Doe</Table.DataCell>
      </Table.Row>
    </Table.Foot>
  </Table>
));
