// import $ from 'jquery';


let actions = {

    addTaskItem: taskContent => ({
        type: 'task/DONE_PICK_TASK',
        payload: taskContent
    }),

    delTask: taskId => ({
        type: 'task/DEL_TASK',
        payload: taskId
    })

};

export default actions;