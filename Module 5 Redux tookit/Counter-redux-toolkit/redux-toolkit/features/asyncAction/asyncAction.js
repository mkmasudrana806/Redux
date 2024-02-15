const { createStore, applyMiddleware } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const { thunk } = require("redux-thunk");

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const fetchPostsRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostsSucceeded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
};

const fetchPostsError = (error) => {
  return {
    type: "posts/error",
    payload: error,
  };
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "posts/succeeded":
      return {
        ...state,
        loading: false,
        error: "",
        posts: action.payload,
      };

    case "posts/error":
      return {
        ...state,
        loading: false,
        error: action.payload,
        posts: [],
      };

    default:
      return state;
  }
};

// thunk functions
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequested());
    try {
      const response = await fetch(
        "https://jsonzzplaceholderd.typicode.com/posts"
      );
      const posts = await response.json();
      dispatch(fetchPostsSucceeded(posts));
    } catch (error) {
      fetchPostsError("error happened");
    }
  };
};

// store
const store = createStore(reducer, applyMiddleware(thunk));

// subscribe the store
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch thunk
store.dispatch(fetchPosts());
