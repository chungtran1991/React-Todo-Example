
import React, { Component } from 'react'
class TodoList extends Component {
    handleInput = e => {
        e.preventDefault()
        const taskName = this.refs.taskInput.value;
        this.props.addItem(taskName);

        // reset and focus again on input form
        this.refs.taskInput.value = '';
        this.refs.taskInput.focus();
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <h1 className="titleHeader">TODO: TASK</h1>
                    <form onSubmit={this.handleInput}>
                        <input
                            placeholder="Task"
                            ref="taskInput"
                        />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TodoList