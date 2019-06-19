import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Themes from './components/Themes';

class App extends Component {
  state = {
    currentTheme: "standard",
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}));
  }
  
  //toggleComplete
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  deleteItem = (id) => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
      .then(res => 
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
    .then(res => 
      this.setState({
        todos: [...this.state.todos, res.data]
      })  
    );
  }

  changeTheme = (e) => {
    console.log("changed to " + e.target.innerHTML);
    
    this.setState({
        currentTheme: e.target.innerHTML
    });

    console.log("state: " + this.state.currentTheme);
    this.setTheme(e.target.innerHTML);
  }

  setTheme = (theme) => {
    let body = document.getElementsByTagName("body")[0];
    let header = document.getElementById("header");
    let textField = document.getElementById("text-field");
    let button = document.getElementById("button-submit");
    let list = document.getElementById("theme-list");
    let itemBody = document.getElementById("item-body");
    let title = document.getElementById("title");

    if(theme === "standard") {
      body.style.filter = "invert(0)";
      body.style.background = "#707070";
      header.style.background = "#b0b0b0";
      textField.style.background = "white";
      button.style.background = "#6EB05D";
      list.style.color = "white";
      itemBody.style.backgroundColor = "#e0e0e0";
      title.style.color = "white";
    }
    else if(theme === "minimal") {
      body.style.filter = "invert(0)";
      body.style.background = "#a0a0a0";
      header.style.background = "white";
      textField.style.background = "#e0e0e0";
      button.style.background = "#81C784";
      list.style.color = "white";
      itemBody.style.backgroundColor = "white";
      title.style.color = "#bdbdbd";
    }
    else if(theme === "material") {
      body.style.filter = "invert(0)";
      body.style.background = "#e0e0e0";
      header.style.background = "#546E7A";
      textField.style.background = "#e0e0e0";
      button.style.background = "#8BC2BC";
      list.style.color = "black";
      itemBody.style.backgroundColor = "white";
      title.style.color = "white";
    }
    else if(theme === "casual") {
      body.style.filter = "invert(0)";
      body.style.background = "white";
      header.style.background = "#1565C0";
      textField.style.background = "white";
      button.style.background = "orange";
      list.style.color = "black";
      itemBody.style.backgroundColor = "#e0e0e0";
      title.style.color = "white";
    }
    else if(theme === "light") {
      body.style.filter = "invert(0)";
      body.style.background = "#f0f0f0";
      header.style.background = "white";
      textField.style.background = "#e0e0e0";
      button.style.background = "#90A4AE";
      list.style.color = "black";
      itemBody.style.backgroundColor = "white";
      title.style.color = "black";
    }
    else {
      body.style.filter = "invert(1)";
    }

    console.log(theme);
  }

  render() {
    return (
      <Router>
        <Themes changeTheme={this.changeTheme} />
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <div id="item-body" className="todos-container">
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
              </div>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
