import profileReducer from './profile-reducer';
import messageReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';



let store = {
    _state: {
        profilePage: {
            postData: [{
                id: 1,
                message: 'Привет, как дела?',
                likesCounter: 1000
            },
            {
                id: 2,
                message: 'Привет Мир! ',
                likesCounter: 200
            }
            ],
            newPostText: ''
        },

        messagesPage: {
            dialogsData: [{
                id: 1,
                name: 'Василий'
            },
            {
                id: 2,
                name: 'Акакий'
            },
            {
                id: 3,
                name: 'Даздраперма'
            },
            {
                id: 4,
                name: 'Андреян'
            },
            {
                id: 5,
                name: 'Баранкин'
            },
            {
                id: 6,
                name: 'Хрусталев'
            }
            ],
            messagesData: [{
                id: 1,
                message: 'Текст текст текст текст текст текст текст текст текст'
            },
            {
                id: 2,
                message: 'Текст текст текст текст текст '
            },
            {
                id: 3,
                message: 'Текст текст текст текст текст текст текст текст'
            }
            ],
            newMessage: ''
        },

        sidebar: {
            friend: [{
                id: 1,
                friendName: "Поля",
                friendAva: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            },
            {
                id: 2,
                friendName: "Василий",
                friendAva: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/366-mj-7703-fon-jj.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d144b28b5ebf828b7d2a1bb5b31efdb6"
            },
            {
                id: 3,
                friendName: "Вика",
                friendAva: "https://thumbs.dreamstime.com/b/bored-female-person-yawning-indoors-girl-covering-mouth-gray-background-closeup-redhead-woman-waiting-something-beautiful-199834115.jpg"
            },
            {
                id: 4,
                friendName: "Акакий",
                friendAva: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            },
            {
                id: 5,
                friendName: "Винцеслав",
                friendAva: "https://static5.depositphotos.com/1000580/395/i/600/depositphotos_3954362-stock-photo-man-jump.jpg"
            },
            {
                id: 6,
                friendName: "Глафира",
                friendAva: "https://www.freedigitalphotos.net/images/category-images/201.jpg"
            }

            ]
        }
    },
    _rerenderAll() { },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderAll = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer (this._state.messagesPage, action);
        // this._state.sidebar = sidebarReducer (this._state.sidebar, action);

        this._rerenderAll(this._state);
    },

}




window.store = store;

export default store;