import React, { Component } from "react";
import './todoList.css';
import FlipMove from "react-flip-move";
class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);


    }
    createTasks(item) {
        return <li key={item.key}>{item.text}
            <button className="delete" onClick={() => this.delete(item.key)}> done</button >

        </li>
    }


    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        )
    };
}

export default TodoItems;