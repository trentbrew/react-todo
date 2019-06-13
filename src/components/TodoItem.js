import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    setStyles = () => {
        return {
            background: "#E0E0E0",
            padding: "10px",
            margin: "0px",
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.setStyles()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.deleteItem.bind(this, id)} className="buttonDelete">x</button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
