import React from 'react';
import { useTable, usePagination, Column } from 'react-table';
import { Table, Pagination, InputGroup, FormControl } from 'react-bootstrap';

interface BootstrapReactTableProps {
    columns: Column<any>[],
    data: any[]
}

export const BootstrapReactTable: React.FC<BootstrapReactTableProps> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data, initialState: { pageIndex: 0 } }, usePagination);

    return (
        <>
            <Table responsive striped bordered hover size="sm" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Pagination size="sm">
                <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
                <Pagination.Prev onClick={() => previousPage()} disabled={!canPreviousPage} />
                <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
                <Pagination.Last onClick={() => gotoPage(pageCount! - 1)} disabled={!canNextPage} />
                <span>
                    Page
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                | Go to page:
                <span>
                    <InputGroup size="sm" className="mb-3">
                        <FormControl
                            placeholder="Select Page"
                            aria-label="select page"
                            type="number"
                            defaultValue={'' + pageIndex + 1}
                            style={{ width: '50px' }}
                            onChange={(e: any) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(page)
                            }}
                        />
                    </InputGroup>
                </span>
                <select
                    className="form-control form-control-sm"
                    value={pageSize}
                    style={{ width: '100px' }}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 25, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </Pagination>
        </>
    )
}

export default BootstrapReactTable;