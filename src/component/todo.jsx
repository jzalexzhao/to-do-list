import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const Todo = (props) => {
    const [checked, setChecked] = useState(false);
    const [hoverd, setHovered] = useState(false);
    const liStyle = {
        textDecoration: checked? 'line-through' : 'none',
    };
    const className = hoverd? "list-group-item list-group-item-dark" : "list-group-item"

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    const toggleHover = () => setHovered(!hoverd);

    return (
        <li className = {className} style={liStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <Checkbox color="primary" onChange={handleCheck} />
            {props.name}
            <button type="button" className="btn btn-danger ml-3" onClick={() => props.onDelete(props.todo.id)}>Delete</button>
        </li>
    );
}