import {observable, action} from 'mobx'
import todoStore from '../stores/TodoStore';

export default class TodoModel {
    store
    id
    @observable showing
    @observable title
    @observable completed
    @observable deletes

    constructor(store,title,completed,id,showing,deletes) {
        this.title = title
        this.completed = completed 
        this.id = id
        this.store = store 
        this.showing = showing
        this.deletes = deletes
    }
    
    @action
    toggle() {
        this.completed = !this.completed;
        if(this.completed) {
            todoStore.lastID--
        }
        else{
            todoStore.lastID++
        }
    }
    @action
    delete() {
        this.showing = false;
        this.deletes = true;
     
        if(!this.completed) {
            todoStore.lastID--
        }
    }
}
