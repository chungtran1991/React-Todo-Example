
import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  addItem = (taskName) => {
    const newTask = {
        text: taskName,
        key: Date.now()
    }
    if (taskName !== null && taskName !== '') {
        const items = [...this.state.items, newTask]
        this.setState({
            items,
        })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div>
        <TodoList  addItem={this.addItem} />
        <TodoItems 
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
export default App;
