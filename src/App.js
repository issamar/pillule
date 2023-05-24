import { useEffect, useState } from "react";
import "./App.css";
import AddingForm from "./Components/AddingForm";
import Table from "./Components/Table";

function App() {
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState(false);
    console.log("global: ", data);

    useEffect(() => {
        let InitData = JSON.parse(localStorage.getItem("Data"));
        setData(InitData);
    }, []);

    useEffect(() => {
        if (data?.length === 0) {
            return;
        }
        localStorage.setItem("Data", JSON.stringify(data));
    }, [data]);
    function onAdd(newData) {
        setData((prev) => {
            console.log("prev", prev);
            if (prev == null) {
                setData([]);
            }
            return [...prev, newData];
        });
    }

    function onDelete(idToDelete) {
        if (data.length === 1) {
            return setData(null);
        }
        setData((prev) => {
            return prev.filter((obj) => obj.id !== idToDelete);
        });
        if (filter.length === 1) {
            return setFilter(null);
        }
        setFilter((prev) => {
            return prev.filter((obj) => obj.id !== idToDelete);
        });
    }

    function onEdit(newEdition, idToEdit) {
        setData((prev) => {
            return prev.map((elem) =>
                elem.id === idToEdit ? newEdition : elem
            );
        });
        setFilter((prev) => {
            return prev.map((elem) =>
                elem.id === idToEdit ? newEdition : elem
            );
        });
    }
    return (
        <div className="App">
            <div>
                <AddingForm
                    onAdd={onAdd}
                    data={data}
                    filter={setFilter}
                    search={search}
                    searching={setSearch}
                />
            </div>
            <div>
                <Table
                    data={data}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    editionMode={setEditMode}
                    editMode={editMode}
                    search={search}
                    filter={filter}
                />
            </div>
        </div>
    );
}

export default App;
