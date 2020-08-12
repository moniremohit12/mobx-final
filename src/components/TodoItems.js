import React,{Component} from 'react';
import TodoItem from './TodoItem'
import {observer} from 'mobx-react'
import todoStore from '../stores/TodoStore';
import InfoItem from"./InfoItem";
import {observable} from 'mobx'


@observer
class TodoItems extends Component {
    @observable showInfoItem

    render() {
        return(
            <section className="main">
                <ul className="todo-list">
                    {
                        todoStore.todos.map(todo=> {
                            return(
                                <TodoItem todo={todo} />
                            )
                        })
                    }
                </ul>
                <InfoItem/>
            </section>
        )
    }
}

export default TodoItems;