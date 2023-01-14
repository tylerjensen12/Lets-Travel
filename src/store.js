import { createStore } from "redux";

let initialState = {
  username: "",
  userId: null,
  admin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      let newState = {
        username: action.payload.username,
        userId: action.payload.id,
        admin: action.payload.admin,
      };
      return newState;
    default:
      return state;
  }
};

const store = createStore(reducer)

export default store