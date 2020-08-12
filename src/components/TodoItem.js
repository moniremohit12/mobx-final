import React,{Component} from 'react';
import {observer} from 'mobx-react'

@observer
class TodoItem extends Component {
    
    onToggle = () => {
        this.props.todo.toggle();
    }

    deleteTodo = (event) => {
        this.props.todo.delete(event)
    }
    render() {
        const { todo } = this.props;
        return(
            <li className={todo.completed? 'completed' : ''}>
                <div 
                    className={todo.showing? ' viwe show ' : 'dont-show viwe'}
                >
                    <input 
                        onChange={this.onToggle}
                        type="checkbox" 
                        className="toggle" 
                        value="on" 
                        checked={todo.completed}
                    />
                    <label>{todo.title}</label>
                    <button 
                        onClick={this.deleteTodo}
                        className="destry"
                    ><i class="fa fa-times" aria-hidden="true"></i></button>
                </div>
            </li>    
        )
    }
}

export default TodoItem;