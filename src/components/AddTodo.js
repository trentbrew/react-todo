import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} className="new-todo-form">
                <input id="text-field" className="input-field" type="text" name="title" placeholder="Type a new todo" onChange={this.onChange} value={this.state.title} />
                <input id="button-submit" className="btn-submit" type="submit" value="Add" className="btn" />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const dynamicStyles = {
    backgroundColor: "red"
}

export default AddTodo;
