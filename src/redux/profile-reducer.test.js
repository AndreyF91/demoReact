import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profile-reducer";

let initialState = {
  postData: [
    {
      id: 1,
      message: "Привет, как дела?",
      likesCounter: 1000,
    },
    {
      id: 2,
      message: "Привет Мир! ",
      likesCounter: 200,
    },
  ],
};

test("a new post addition", () => {
  let action = addPostActionCreator("test");
  let newState = profileReducer(initialState, action );
  expect(newState.postData.length).toBe(3);
});

test("message of a new post addition", () => {
  let action = addPostActionCreator("test");
  
  let newState = profileReducer(initialState, action );
  expect(newState.postData[2].message).toBe('test');
});

test("deletion of a post", () => {
  let action = deletePostActionCreator(1);
  
  let newState = profileReducer(initialState, action );
  expect(newState.postData.length).toBe(1);
});