import React from 'react'
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from 'react-table';
import TableGlobalFilter from './TableGlobalFilter';
const DefaultColumnFilter = ({
    column: { filterValue, preFilteredRows, setFilter }
}) => {
    const count = preFilteredRows.length;
    return (
        <input
            value={filterValue || ""}
            onChange={e => {
                setFilter(e.target.value || undefined);
            }}
            placeholder={`Buscar entre ${count} registros...`}
        />
    );
};


const Table = ({ columns, data }) => {
    const filterTypes = React.useMemo(
        () => ({
            text: (rows, id, filterValue) => {
                return rows.filter(row => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined
                        ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
                        : true;
                });
            }
        }),
        []
    );
    const defaultColumn = React.useMemo(
        () => ({
            Filter: DefaultColumnFilter
        }),
        []
    );
    const {
        // Table props
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        //Filter props
        visibleColumns,
        prepareGlobalFilteredRows,
        setGlobalFilter,
        // Pagination props
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        { columns, data, defaultColumn, filterTypes, initialState: { pageIndex: 0 } },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    return (
        <>
            {/* Table */}
            <table {...getTableProps()}>
                <thead>
                    <tr>
                        <th colSpan={visibleColumns.length} style={{ textAling: "left" }}>
                            <TableGlobalFilter
                                prepareGlobalFilteredRows={prepareGlobalFilteredRows}
                                globalFilter={state.globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />
                        </th>
                    </tr>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? " ▲" : " ▼") : ""}
                                    </span>
                                    {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* Pagination Buttons */}
            <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}
                </button>{" "}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {"<"}
                </button>{" "}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {">"}
                </button>{" "}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {">>"}
                </button>{" "}
                <span>
                    Pagina{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
                <span>
                    | Ir a página:{" "}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                        }}
                        style={{ width: "100px" }}
                    />
                </span>{""}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => {
                        return <option key={pageSize} value={pageSize}>Mostrar {pageSize}</option>
                    })}
                </select>
            </div>
        </>
    );
}

export default Table;
