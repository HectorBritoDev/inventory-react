import React from 'react';
import '../css/TableGlobalFilter.scss';

const TableGlobalFilter = ({ prepareGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
    // const count = prepareGlobalFilteredRows && prepareGlobalFilteredRows.length;
    return (
        <span>
            Buscar: {" "}
            <input
                value={globalFilter || ""}
                onChange={e => {
                    setGlobalFilter(e.target.value || undefined); //set undefined to remove the filter entirely
                }}
                placeholder={"Ingrese busqueda"}
                style={{ boder: "0" }}
                className="global-search__input"
            />
        </span>
    );
}

export default TableGlobalFilter;