import React from 'react'
import { useTable, useSortBy, useFilters, useGlobalFilter, usePagination } from 'react-table';
import TableGlobalFilter from './TableGlobalFilter';
import ExportPDF from './ExportPDF';
import '../css/Table.scss';

//Default Filter input per Row - Diferent from Global filter
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


const Table = ({ columns, data, title }) => {
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
        // visibleColumns,
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
            <div className="table-title">
                {title}
            </div>
            <div className="table-options">
                <TableGlobalFilter
                    prepareGlobalFilteredRows={prepareGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                <div className="table-options__exportAndChunk">
                    <span>
                        Exportar: {" "}
                        <ExportPDF title="Reporte Productos" tableHeaders={[["ID", "Nombre", "Cantidad"]]} data={data} />
                    </span>
                    <span>
                        Mostrar{" "}
                        <select
                            value={pageSize}
                            onChange={e => {
                                setPageSize(Number(e.target.value));
                            }}
                            className="table-select"
                        >
                            {[10, 20, 30, 40, 50].map(pageSize => {
                                return <option key={pageSize} value={pageSize}>{pageSize}</option>
                            })}
                        </select>
                    </span>
                </div>
            </div>

            {/* Table */}
            <table {...getTableProps()} className="table">
                <thead className="table__thead">
                    {/* <tr>
                        <th colSpan={visibleColumns.length} style={{ textAling: "left" }}>
                        </th>
                        
                    </tr> */}

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
                <tbody {...getTableBodyProps()} className="table__tbody" id="table-body">
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
            <div className="pagination">
                <div className="pagination-buttons">

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
                </div>
                <div className="pagination-gotoPage">

                    <span>
                        Ir a página:{" "}
                        <input
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={e => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                gotoPage(page);
                            }}
                            className="pagination-info__gotoPage"
                        />
                    </span>{""}

                </div>

            </div>
        </>
    );
}

export default Table;
