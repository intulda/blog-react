import produce from 'immer';

const initialState = {
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  isLoggedIn: false,
  isLoginModalOpen: false,
  loginLoading: false,
  loginError: false,
  logoutLoading: false,
  isLoginFormState: 'LOGIN',
  isSignUpLoading: false,
  isSignUpSuccess: false,
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

export const LOAD_MY_INFORMATION_REQUEST = 'LOAD_MY_INFORMATION_REQUEST';
export const LOAD_MY_INFORMATION_FAILURE = 'LOAD_MY_INFORMATION_FAILURE';
export const LOAD_MY_INFORMATION_SUCCESS = 'LOAD_MY_INFORMATION_SUCCESS';

export const LOAD_MY_INFORMATION_REQUEST_ACTION = () => ({
  type: LOAD_MY_INFORMATION_REQUEST,
});

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

const reducer = ((state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_MY_INFORMATION_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;
    case LOAD_MY_INFORMATION_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.data;
      draft.isLoggedIn = false;
      break;
    case LOAD_MY_INFORMATION_SUCCESS:
      draft.loadUserLoading = false;
      draft.user = action.data;
      draft.loadUserDone = true;
      draft.isLoggedIn = action.data != null;
      break;
    case LOGIN_FORM:
      draft.isLoginFormState = 'LOGIN';
      break;
    case REGISTER_FORM:
      draft.isLoginFormState = 'REGISTER';
      break;
    case LOGIN_FORM_OPEN:
      draft.isLoginModalOpen = true;
      break;
    case LOGIN_FORM_CLOSE:
      draft.isLoginModalOpen = false;
      draft.isLoginFormState = 'LOGIN';
      break;
    case LOGIN_REQUEST:
      draft.loginLoading = true;
      break;
    case LOGIN_SUCCESS:
      draft.isLoginModalOpen = false;
      draft.loginLoading = false;
      draft.isLoggedIn = true;
      draft.user = action.data;
      break;
    case LOGIN_FAILURE:
      draft.loginLoading = false;
      draft.loginError = action.data;
      break;
    case LOGOUT_REQUEST:
      draft.logoutLoading = true;
      break;
    case SIGN_UP_REQUEST:
      draft.isSignUpLoading = true;
      break;
    case SIGN_UP_SUCCESS:
      draft.isSignUpLoading = false;
      draft.isSignUpSuccess = true;
      draft.isLoginFormState = 'LOGIN';
      break;
    case LOGOUT_SUCCESS:
      draft.isLoggedIn = false;
      draft.logoutLoading = false;
      draft.message = action.data;
      break;
    case LOGOUT_FAILURE:
      draft.isLoggedIn = false;
      draft.user.authentication = 'guest';
      break;
    default:
      break;
  }
}));

export default reducer;
