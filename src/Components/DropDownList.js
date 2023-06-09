const DropDownList = ({
    handleChange,
    currentData,
    editMode,
    handleEditionChange,
    value,
}) => {
    //const [options, setOptions] = useState();
    const options = [
        "Mercilon",
        "Marilon",
        "Microgynon",
        "Marvelon",
        "Microval",
        "Cerazette",
        "Desonette",
        "Meliane",
        "Sunya",
        "Jasmine",
    ];

    return !editMode ? (
        <>
            <input
                type="text"
                list="Pils"
                onChange={handleChange}
                name="medoc"
                value={currentData.medoc}
                className="form-control"
            />
            <datalist id="Pils">
                {options.map((option, index) => {
                    return <option key={index} value={option} />;
                })}
            </datalist>
        </>
    ) : (
        <>
            <input
                type="text"
                list="Pils"
                onChange={handleEditionChange}
                name="medoc"
                value={value.medoc}
                className="form-control"
            />
            <datalist id="Pils">
                {options.map((option, index) => {
                    return <option key={index} value={option} />;
                })}
            </datalist>
        </>
    );
};

export default DropDownList;
