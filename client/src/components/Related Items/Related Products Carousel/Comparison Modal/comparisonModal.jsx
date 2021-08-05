import React from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from '@material-ui/core';
import useStyles from './styles.js';
import CheckIcon from '@material-ui/icons/Check';

const ComparisonModal = ({ overviewProductInfo, product }) => {

  const columns = [
    {
      id: 'name1',
      label: product.name,
      minWidth: 150,
      align: 'left'
    },
    {
      id: 'features',
      label: 'Features',
      minWidth: 150,
      align: 'center'
    },
    {
      id: 'name2',
      label: overviewProductInfo.name,
      minWidth: 150,
      align: 'right'
    }
  ];

  const createData = (name1, features, name2) => {
      return { name1, features, name2 };
  }

  let allFeatures = [];
  let productFeatures = [];
  let overviewFeatures = [];

  product.features.forEach(feature => {
    if (!feature.value) {
      feature.value = '';
    }
    allFeatures.push(feature.value + ' ' + feature.feature);
    productFeatures.push(feature.value + ' ' + feature.feature);
  });

  overviewProductInfo.features.forEach(feature => {
    if (!feature.value) {
      feature.value = '';
    }

    allFeatures.push(feature.value + ' ' + feature.feature);
    overviewFeatures.push(feature.value + ' ' + feature.feature);
  });

  const rows = allFeatures.map(feature => {

    if (productFeatures.indexOf(feature) >= 0 && overviewFeatures.indexOf(feature) >= 0) {
      return createData(<CheckIcon style={{ color: 'green' }}/>, feature, <CheckIcon style={{ color: 'green' }}/>);
    } else if (productFeatures.indexOf(feature) >= 0 && overviewFeatures.indexOf(feature) === -1) {
      return createData(<CheckIcon style={{ color: 'green' }}/>, feature, ' ');
    } else {
      return createData(' ', feature, <CheckIcon style={{ color: 'green' }}/>);
    }
  })

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ComparisonModal;