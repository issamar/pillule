import React, { useState } from "react";
import DropDownList from "./DropDownList";

const AddingForm = ({ onAdd }) => {
    const [currentData, setCurrentData] = useState({
        patient: "",
        medoc: "",
        date: "",
    });
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setCurrentData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAdd(currentData);
        setCurrentData({ patient: "", medoc: "", date: "" });
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="inp">
                    <input
                        type="text"
                        name="patient"
                        onChange={handleChange}
                        value={currentData.patient}
                        className="form-control name"
                        placeholder="Nom De Patient"
                    />
                </div>
                <div className="inp">
                    <DropDownList
                        handleChange={handleChange}
                        currentData={currentData}
                    />
                </div>
                <div className="inp">
                    <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        value={currentData.date}
                        className="form-control"
                    />
                </div>
                <div className="inp">
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddingForm;
