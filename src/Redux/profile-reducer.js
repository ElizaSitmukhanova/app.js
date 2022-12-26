const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
      { id: 1, message: 'Hello, my name is Eliza.And you?', image: 'https://art-assorty.ru/wp-content/uploads/2018/11/23256354753-1.jpg', likesCount: 0 },
      { id: 2, message: 'Hi, i am  Rachel .Nice to meet you! Where are you from?', image: 'https://art-assorty.ru/wp-content/uploads/2018/11/23256354753-1.jpg', likesCount: 25 },
    ],
    newPostText: "friends-Forever.com"
  };

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
        image: 'https://art-assorty.ru/wp-content/uploads/2018/11/23256354753-1.jpg',
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text});

 
export default profileReducer;