import { TableHead, TableCell, TableSortLabel, Checkbox, TableRow } from "@material-ui/core";
import PropTypes from 'prop-types';

const headRows = [
    { id: 'avatar', numeric: false, disablePadding: false, label: 'Avatar' },
    { id: 'id', numeric: false, disablePadding: true, label: 'Id' },
    { id: 'email', numeric: false, disablePadding: false, label: 'E-mail' },
    { id: 'first_name', numeric: false, disablePadding: false, label: 'First Name' },
    { id: 'last_name', numeric: false, disablePadding: false, label: 'Last Name' },
];

export default function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {headRows.map(
                    row => (
                        <TableCell
                            key={row.id}
                            align={row.numeric ? 'right' : 'left'}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={orderBy === row.id ? order : false}
                        >
                            <TableSortLabel
                                active={orderBy === row.id}
                                direction={order}
                                onClick={createSortHandler(row.id)}
                            >
                                {row.label}
                            </TableSortLabel>
                        </TableCell>
                    ),
                    this,
                )}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};