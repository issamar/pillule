import React, { useState } from "react";
import DropDownList from "./DropDownList";

const AddingForm = ({ onAdd, data, filter, search, searching }) => {
    const [currentData, setCurrentData] = useState({
        patient: "",
        medoc: "",
        date: "",
    });

    const [searchable, setSearchable] = useState([]);
    function handleToggle(e) {
        const status = e.target.checked;
        searching(status);
        filter(data);
        setSearchable(data);
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setCurrentData((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function handleSearch(e) {
        console.log(e.target.value);
        /* const filtered = searchable
            .map((obj) => obj.patient)
            .includes(e.target.value); */
        const filtered = searchable.filter((obj) =>
            obj.patient.includes(e.target.value)
        );
        filter(filtered);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAdd(currentData);
        setCurrentData({ patient: "", medoc: "", date: "" });
    }
    return (
        <div className="form-container">
            {search ? (
                <form>
                    <div className="inp">
                        <input
                            type="text"
                            name="patient"
                            onChange={handleSearch}
                            value={searchable.patient}
                            className="form-control name"
                            placeholder="Nom De Patient"
                        />
                    </div>
                    <div className="inp toggle">
                        <h3>Chercher?</h3>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={search}
                                onChange={handleToggle}
                                onClick={(prev) => {
                                    searching(!prev);
                                }}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </form>
            ) : (
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
                    <div className="inp toggle">
                        <h3>Chercher?</h3>
                        <label className="switch">
                            <input
                                type="checkbox"
                                value={search}
                                onChange={handleToggle}
                            />
                            <span className="slider round"></span>
                        </label>
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
            )}
        </div>
    );
};

export default AddingForm;
