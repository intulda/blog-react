const initialState = {
  isLoggedIn: false,
  isLoginModalOpen: false,
  loginLoading: false,
  loginError: false,
  logoutLoading: false,
  isLoginFormState: 'LOGIN',
  user: {
    nickname: '',
    profile_image: null,
    authentication: 'guest',
  },
};

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const LOGIN_FORM = 'LOGIN_FORM';
export const REGISTER_FORM = 'REGISTER_FORM';

export const ID_CHECK_REQUEST = 'ID_CHECK_REQUEST';
export const ID_CHECK_SUCCESS = 'ID_CHECK_SUCCESS';
export const ID_CHECK_FAILURE = 'ID_CHECK_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

const LOGIN_FORM_OPEN = 'LOGIN_FORM_OPEN';
const LOGIN_FORM_CLOSE = 'LOGIN_FORM_CLOSE';

export const SIGN_UP_REQUEST_ACTION = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const ID_CHECK_REQUEST_ACTION = () => ({
  type: ID_CHECK_REQUEST,
});

export const LOGIN_FORM_MOVE_ACTION = () => ({
  type: LOGIN_FORM,
});

export const REGISTER_FORM_MOVE_ACTION = () => ({
  type: REGISTER_FORM,
});

export const LOGIN_FORM_OPEN_ACTION = () => ({
  type: LOGIN_FORM_OPEN,
});

export const LOGIN_FORM_CLOSE_ACTION = () => ({
  type: LOGIN_FORM_CLOSE,
});

export const LOGIN_REQUEST_ACTION = (data) => ({
  type: LOGIN_REQUEST,
  data,
});
export const LOGOUT_REQUEST_ACTION = () => ({
  type: LOGOUT_REQUEST,
});

const reducer = ((state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FORM:
      return {
        ...state,
        isLoginFormState: 'LOGIN',
      };
    case REGISTER_FORM:
      return {
        ...state,
        isLoginFormState: 'REGISTER',
      };
    case LOGIN_FORM_OPEN:
      return {
        ...state,
        isLoginModalOpen: true,
      };
    case LOGIN_FORM_CLOSE:
      return {
        ...state,
        isLoginModalOpen: false,
        isLoginFormState: 'LOGIN',
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginModalOpen: false,
        loginLoading: false,
        isLoggedIn: true,
        user: {
          ...state.user,
          authentication: 'admin',
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginLoading: false,
        loginError: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        logoutLoading: true,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        logoutLoading: false,
        user: {
          ...state.user,
          authentication: 'guest',
        },
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: {
          ...state.user,
          authentication: 'guest',
        },
      };
    default:
      return state;
  }
});

export default reducer;
