function List({ listItems = [] }) {
    return (
        <ul>
            {listItems.map((value) => (
                <li>{value}</li>
            ))}
        </ul>
    );
}

export default List;