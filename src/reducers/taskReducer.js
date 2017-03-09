import { fromJS } from 'immutable';  
const initialState = {
    newTaskId: 1,
    tasks: [
        {
            id: 0,
            content: "task0",
            isDel: true
        }
    ]
};


export default (state = initialState, action) => {

    let newState ;

    switch (action.type) {

        case 'task/DONE_PICK_TASK':

            let newTask =  {
                id: state.newTaskId,
                content: action.payload,
                isDel: false
            };

           return fromJS(state).update('tasks', list => list.push(newTask))
                                .set('newTaskId', state.newTaskId + 1)
                                .toJS();


        case 'task/DEL_TASK':
            return fromJS(state).setIn(['tasks', action.payload, 'isDel'], true).toJS();

        default:
            return state;
    }

};
