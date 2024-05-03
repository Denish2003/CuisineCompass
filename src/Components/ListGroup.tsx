import { useState } from "react";
import './ListGroup.css';

interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {
    // State Hook
    // arr[0] - variable (selectedIndex)
    // arr[1] - updater function
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    
    return (
        <>
            <h4 className="heading">{heading}</h4>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item}
                        onClick={() => setSelectedIndex(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;