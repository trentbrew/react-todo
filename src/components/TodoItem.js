import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    setStyles = () => {
        return {
            background: "none",
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
                    <label className="check-container">
                        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                        <span className="checkmark"></span>
                    </label>
                    {title}
                    <button onClick={this.props.deleteItem.bind(this, id)} className="buttonDelete"><strong>X</strong></button>
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
