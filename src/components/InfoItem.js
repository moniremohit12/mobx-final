import React,{Component} from 'react';
import {observer} from 'mobx-react'
import todoStore from '../stores/TodoStore';


@observer
class InfoItem extends Component {  

    showAll = () => {
        todoStore.all();
    }

    showActive = () => {
        todoStore.active();
    }

    showCompleted = () => {
        todoStore.completeds();
    }

    showClearCompleted = () => {
        todoStore.clearComplateds();
    }

    render() {
        return(
            <div 
                className={this.props.showInfo? 'dont-show viwe' : 'show viwe'}
            >
                <div className="infoitem">
                    <span>{
                        `${todoStore.lastID} items left`
                    }</span>
                    <div className="actions">
                        <span 
                            onClick={() =>this.showAll()}
                            className="item-actions"
                        >All</span>
                        <span 
                            onClick={() =>this.showActive()}
                            className="item-actions"
                        >Active</span>
                        <span 
                            onClick={() =>this.showCompleted()}
                            className="item-actions"
                        >Completed
                        </span>
                        <span
                            onClick={() =>this.showClearCompleted()}
                            className="item-actions"
                        >clear completed</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoItem;