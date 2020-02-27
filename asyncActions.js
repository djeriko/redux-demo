const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  loading: false,
  users: [],
  error: ""
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Actions
const fetchUsersRequests = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
};

// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: payload,
        error: ""
      };

    case FETCH_USERS_REQUEST:
      return {
        loading: false,
        users: [],
        error: payload
      };
  }
};

// Redux store
const store = createStore(reducer)

