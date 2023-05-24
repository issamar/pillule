import TableData from "./TableData";
import EditTableData from "./EditTableData";

const Table = ({
    data,
    onDelete,
    onEdit,
    editionMode,
    editMode,
    search,
    filter,
}) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nom Du Patient</th>
                        <th scope="col">Pillule</th>

                        <th scope="col">Date De Vente</th>
                        <th scope="col">Jours Ecoulés</th>
                    </tr>
                </thead>
                {!search && (
                    <tbody>
                        {data?.map((item) => {
                            return !editMode ? (
                                <TableData
                                    item={item}
                                    key={item.id}
                                    onDelete={() => {
                                        onDelete(item.id);
                                    }}
                                    editionMode={editionMode}
                                />
                            ) : (
                                <EditTableData
                                    item={item}
                                    key={item.id}
                                    onEdit={(editItem) =>
                                        onEdit(editItem, item.id)
                                    }
                                    editionMode={editionMode}
                                    editMode={editMode}
                                />
                            );
                        })}
                    </tbody>
                )}
                {search && (
                    <tbody>
                        {filter?.map((item) => {
                            return !editMode ? (
                                <TableData
                                    item={item}
                                    key={item.id}
                                    onDelete={() => {
                                        onDelete(item.id);
                                    }}
                                    editionMode={editionMode}
                                />
                            ) : (
                                <EditTableData
                                    item={item}
                                    key={item.id}
                                    onEdit={(editItem) =>
                                        onEdit(editItem, item.id)
                                    }
                                    editionMode={editionMode}
                                    editMode={editMode}
                                />
                            );
                        })}
                    </tbody>
                )}
            </table>
        </div>
    );
};

export default Table;
