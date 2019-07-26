import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { [action.currentUser.id]:  action.user})
    default:
      return state;
  }
}
