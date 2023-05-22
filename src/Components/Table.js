import TableData from "./TableData";
import EditTableData from "./EditTableData";
import { useState } from "react";

const Table = ({ data, onDelete, onEdit, editionMode, editMode }) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nom Du Patient</th>
                        <th scope="col">Pillule</th>

                        <th scope="col">Date De Vente</th>
                        <th scope="col">Jours Ecoulés</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return !editMode ? (
                            <TableData
                                item={item}
                                key={index}
                                onDelete={() => {
                                    onDelete(index);
                                }}
                                editionMode={editionMode}
                            />
                        ) : (
                            <EditTableData
                                item={item}
                                key={index}
                                onEdit={(editItem) => onEdit(editItem, index)}
                                editionMode={editionMode}
                                editMode={editMode}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
