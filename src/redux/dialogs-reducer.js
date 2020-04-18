const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Bek'},
        {id: 2, name: 'Saamai'},
        {id: 3, name: 'Bekjan'},
        {id: 4, name: 'Mama'},
        {id: 5, name: 'Galmurza'},
        {id: 6, name: 'Kylych'}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you, Bek?'},
        {id: 3, message: 'Fine'}
    ],
    newMessage: '' //I am add
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessage
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newMessage = action.body;
            return stateCopy;
        }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE, body: body});

export default dialogsPageReducer;