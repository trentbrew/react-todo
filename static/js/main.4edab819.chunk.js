(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(t,e,n){t.exports=n(62)},57:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(31),c=n.n(r),l=n(19),i=n(6),s=n(7),u=n(9),d=n(8),m=n(10),p=n(15),h=n.n(p),b=n(14),f=n(11),E=(n(57),function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).setStyles=function(){return{background:"#E0E0E0",padding:"10px",margin:"0px",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.setStyles()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)}),n,o.a.createElement("button",{onClick:this.props.deleteItem.bind(this,e),className:"buttonDelete"},"x")))}}]),e}(a.Component)),j=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return o.a.createElement(E,{key:e.id,todo:e,markComplete:t.props.markComplete,deleteItem:t.props.deleteItem})})}}]),e}(a.Component);var v=function(){return o.a.createElement("header",{className:"app-header"},o.a.createElement("h1",null,"TodoList"),o.a.createElement(b.b,{to:"/"},"Home")," | ",o.a.createElement(b.b,{to:"/about"},"About"))},y=n(34),O=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){return n.setState({title:t.target.value})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,className:"new-todo-form"},o.a.createElement("input",{className:"input-field",type:"text",name:"title",placeholder:"Add Todo ...",onChange:this.onChange,value:this.state.title}),o.a.createElement("input",Object(y.a)({className:"btn-submit",type:"submit",value:"Submit"},"className","btn")))}}]),e}(a.Component);var g=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is our about page for this ReactJS playground."))},k=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[]},n.markComplete=function(t){console.log(t),n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.deleteItem=function(t){h.a.delete("https://jsonplaceholder.typicode.com/todos/${id}").then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){h.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return o.a.createElement(b.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{addTodo:t.addTodo}),o.a.createElement(j,{todos:t.state.todos,markComplete:t.markComplete,deleteItem:t.deleteItem}))}}),o.a.createElement(f.a,{path:"/about",component:g})))}}]),e}(a.Component);c.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.4edab819.chunk.js.map