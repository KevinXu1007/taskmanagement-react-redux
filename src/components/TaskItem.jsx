import React from 'react';
import '../styles/taskItem.scss';

class TaskItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.state != this.props.state;
    }

    render() {
        let { task, delTask } = this.props;

        return (
            <div className="taskItem">
                <div className="task"><div className="name">{ task.id }</div></div>
                <div className="info">
                    <div className="weight">{ task.content }</div>
                </div>
                <div className="btn-div">
                    <button onClick={delTask.bind(this, task.id)}> X </button>
                </div>
            </div>
        );
    }
}

TaskItem.propTypes = {
    delTask: React.PropTypes.func.isRequired,   
    task: React.PropTypes.object.isRequired    
};


export default TaskItem;