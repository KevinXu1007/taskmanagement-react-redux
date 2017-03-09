import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions/taskAction';
import TaskItem from './TaskItem';
import '../styles/taskList.scss';

class TaskList extends React.Component {


    addTask() {
        this.props.actions.addTaskItem(this.refs.task.value);
        this.refs.task.value = '';
    }

    getTaskItem(tasks) {
        let data = [];
        tasks.forEach(task => {
            if (!task.isDel) {
                data.push( <TaskItem task={task} delTask={this.props.actions.delTask} key={task.id}/> )
            }
        });

        if(!data.length) data.push(<div className="empty-tip" key="empty">empty</div>);

        return data;
    }

    render(){

        let { taskList, actions  } = this.props;
        let { tasks} = taskList;
       
        return (
            <div className="tasks">
                <div className="title">Task Management</div>

                <div className="taskList">
                    { this.getTaskItem(tasks) }
                </div>

                <div className="btn-div">
                   <input type="text" placeholder="Enter Task" ref="task" /> <button  onClick={this.addTask.bind(this)} >Add</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    taskList: state.taskList
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

 export default connect(mapStateToProps, mapDispatchToProps)(TaskList);