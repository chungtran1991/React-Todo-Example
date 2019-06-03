
import React, { Component } from 'react'

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li className="d-flex align-items-center justify-content-between" key={item.key} >
        <p className="pr-3 mb-0">{item.text}</p>
	    	<button className="btn btn-danger" onClick={() => this.props.deleteItem(item.key)}> Delete </button>
      </li>
    )
  }

  render() {
    const { entries } = this.props;
    const listItems = entries.map(this.createTasks);
    return (
		<div>
			<ul className="theList">{listItems}</ul>
		</div>
	);
  }
}
export default TodoItems
