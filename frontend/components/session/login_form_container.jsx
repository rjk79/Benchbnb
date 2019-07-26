import { connect } from 'react-redux'
import { login } from '../../actions/session_actions';

const msp(state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'login'
  }
}

const mdp(dispatch, ownProps) => {
  return {
    processForm: () => dispatch(login)
  }
}

connect(msp, mdp)(SessionForm)