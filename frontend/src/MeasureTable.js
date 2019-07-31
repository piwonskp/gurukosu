import React, { useContext, useEffect } from 'react'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { observer } from 'mobx-react-lite';
import { format } from 'date-fns'


import Store from './Store';
import { measureList } from './api';


const MeasureTable = observer(
    () => {
      const store = useContext(Store)
      useEffect(() => {measureList(store); return;}, []);
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {store.measures.map(row => (
              <TableRow key={row.name}>
                <TableCell>{format(row.date, 'DD.MM.YYYY, HH:mm')}</TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }
  );

export default MeasureTable;
