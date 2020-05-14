import React from 'react';

const TableGlobalFilter = ({ prepareGlobalFilteredRows, globalFilter, setGlobalFilter }) => {
    const count = prepareGlobalFilteredRows && prepareGlobalFilteredRows.length;
    return (
        <span>
            Buscar: {" "}
            <input
                value={globalFilter || ""}
                onChange={e => {
                    setGlobalFilter(e.target.value || undefined); //set undefined to remove the filter entirely
                }}
                placeholder={"Buscar entre registros..."}
                style={{ boder: "0" }}
            />
        </span>
    );
}

export default TableGlobalFilter;