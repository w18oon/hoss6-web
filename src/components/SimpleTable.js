import React from 'react';
import { PropTypes } from 'prop-types';

import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const SimpleTable = ({ cols, rows }) => {
  const theme = useTheme();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: 'alternate.dark' }}>
          <TableRow>
            {cols.map((col) => (
              <TableCell key={col.key}>
                <Typography
                  variant={'caption'}
                  fontWeight={700}
                  sx={{ textTransform: 'uppercase' }}
                >
                  {col.val}
                </Typography>
              </TableCell>
            ))}
            {/* <TableCell>
              <Typography variant={'caption'} fontWeight={700} sx={{ textTransform: 'uppercase' }}>
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'caption'} fontWeight={700} sx={{ textTransform: 'uppercase' }}>
                Title
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'caption'} fontWeight={700} sx={{ textTransform: 'uppercase' }}>
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant={'caption'} fontWeight={700} sx={{ textTransform: 'uppercase' }}>
                Role
              </Typography>
            </TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={`row-${i}`}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              {cols.map((col) => (
                <TableCell key={`row-${i}-${col.key}`}>
                  <Typography color={'text.secondary'} variant={'subtitle2'}>
                    {row[col.key]}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

SimpleTable.propTypes = {
  cols: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default SimpleTable;
