import {observable, action} from 'mobx'
import TodoModel from './TodoModel'
//  
class TodoStore {

    @observable todos = [

    ]

    @observable lastID = 0
    @observable deletes = false

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this,title,false,this.lastID++,true,false))
    }

    
    @action
    all() {
        todoStore.todos.map(item => {
            if (item.deletes === true) {
                item.showing = false;
            } else {
                item.showing = true;
            }
        })
    }

    @action
    active() {
        this.todos.map(item => {
            if (item.deletes === true) {
                item.showing = false;
            } else {
                if(item.completed == false) {
                    item.showing = true;
                } else {
                    item.showing = false;
                    item.lastID--;
                }
            }
        })
    }

    @action
    completeds() {
        this.todos.map(item => {
            if (item.deletes === true) {
                item.showing = false;
            } else {
                if(item.completed == false ) {
                    item.showing = false;
                } else {
                    item.showing = true;
                    item.lastID--;
                }
            }
        })
    }

    @action
    clearComplateds() {
        this.todos.map(item => {
            if (item.deletes === true) {
                item.showing = false;
            } else {
                if(item.completed == true) {
                    item.showing = false;
                    item.deletes = true;
                    item.lastID--;
                }
            }
        })
    }


}

const todoStore = new TodoStore()
export default todoStore
