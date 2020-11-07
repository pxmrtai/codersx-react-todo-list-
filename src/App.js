import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
const todos = ["Go to market", "Buy food", "Make dinner"];
class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <p>
            TODO LIST
          </p>
          <ul>
            {todos.map(function(item){
              <li>{item}</li>
          })}
          </ul>
        </header>
        
      </div>
      
    );
  }
  
}

export default App;
