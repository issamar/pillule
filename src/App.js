import { useEffect, useState } from "react";
import "./App.css";
import AddingForm from "./Components/AddingForm";
import Table from "./Components/Table";

function App() {
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    console.log("global: ", data);
    useEffect(() => {
        if (data.length === 0) {
            return;
        }
        localStorage.setItem("Data", JSON.stringify(data));
    }, [data]);

    useEffect(() => {
        let InitData = JSON.parse(localStorage.getItem("Data"));
        setData(InitData);
    }, []);
    function onAdd(newData) {
        setData((prev) => {
            return [...prev, newData];
        });
    }

    function onDelete(indexToDelete) {
        setData((prev) => {
            return prev.filter((obj, index) => index !== indexToDelete);
        });
    }

    function onEdit(newEdition, indexToEdit) {
        setData((prev) => {
            return prev.map((elem, index) =>
                index === indexToEdit ? newEdition : elem
            );
        });
    }
    return (
        <div className="App">
            <div>
                <AddingForm onAdd={onAdd} />
            </div>
            <div>
                <Table
                    data={data}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    editionMode={setEditMode}
                    editMode={editMode}
                />
            </div>
        </div>
    );
}

export default App;
