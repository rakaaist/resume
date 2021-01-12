function Select({ options }) {
    return (
        <select>
            <option value="en">English</option>
            <option value="lt">Lietuvių</option>
            {options.map((optionData) => (
                <option {...optionData} />
            ))}
        </select>
    );
}

export default Select;