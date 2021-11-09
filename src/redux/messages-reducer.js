const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Василий",
    },
    {
      id: 2,
      name: "Акакий",
    },
    {
      id: 3,
      name: "Даздраперма",
    },
    {
      id: 4,
      name: "Андреян",
    },
    {
      id: 5,
      name: "Баранкин",
    },
    {
      id: 6,
      name: "Хрусталев",
    },
  ],
  messagesData: [
    {
      id: 1,
      message: "Текст текст текст текст текст текст текст текст текст",
    },
    {
      id: 2,
      message: "Текст текст текст текст текст ",
    },
    {
      id: 3,
      message: "Текст текст текст текст текст текст текст текст",
    },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: state.messagesData.length + 1,
        message: action.newMessage,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessage) => ({
  type: "ADD-MESSAGE",
  newMessage,
});

export default messageReducer;
