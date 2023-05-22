import React, { useEffect, useState } from "react";

const TableData = ({ item, onDelete, editionMode }) => {
    const [diff, setDiff] = useState();
    useEffect(() => {
        calcDiff();
    }, []);
    function calcDiff() {
        const toDay = new Date();

        const currentDate = new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(toDay);
        console.log(currentDate);
        const diffOne = Date.parse(currentDate) - Date.parse(item.date);
        const dif = Math.floor(diffOne / 86400000);
        setDiff(dif);
    }
    function handleDelete() {
        onDelete();
    }
    return (
        <tr>
            <td onClick={() => editionMode((prev) => !prev)} className="name">
                {item.patient}
            </td>
            <td onClick={() => editionMode((prev) => !prev)}>{item.medoc} </td>

            <td onClick={() => editionMode((prev) => !prev)}> {item.date} </td>
            <td>{diff} </td>
            <td>
                <button onClick={handleDelete} className="btn btn-danger">
                    Supprimer
                </button>
            </td>
        </tr>
    );
};

export default TableData;
