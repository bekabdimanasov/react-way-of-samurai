const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const dialogsPageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessage
            };
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.body;
            return state;
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE, body: body});

export default dialogsPageReducer;