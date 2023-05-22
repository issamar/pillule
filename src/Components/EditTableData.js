import React, { useState } from "react";
import DropDownList from "./DropDownList";

const EditTableData = ({ item, onEdit, editionMode, editMode }) => {
    const [editItem, setEditItem] = useState({
        patient: item.patient,
        medoc: item.medoc,
        date: item.date,
    });
    //console.log("global : ", editItem);
    function handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setEditItem((prev) => {
            return { ...prev, [name]: value };
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        onEdit(editItem);
        editionMode(false);
    }
    return (
        <tr>
            <td>
                <form>
                    <input
                        type="text"
                        value={editItem.patient}
                        onChange={handleChange}
                        name="patient"
                    />
                </form>
            </td>
            <td>
                <form>
                    <DropDownList
                        editMode={editMode}
                        value={editItem}
                        handleEditionChange={handleChange}
                    />
                    {/* <input
                        type="text"
                        value={editItem.medoc}
                        onChange={handleChange}
                        name="medoc"
                    /> */}
                </form>
            </td>
            <td>
                <form>
                    <input
                        type="date"
                        value={editItem.date}
                        onChange={handleChange}
                        name="date"
                    />
                </form>
            </td>
            <td>
                <form>
                    <button onClick={handleSubmit} className="btn  btn-warning">
                        Confirmer
                    </button>
                </form>
            </td>
        </tr>
    );
};

export default EditTableData;
