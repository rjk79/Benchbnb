import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions';

const msp(state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'signup'
  }
}

const mdp(dispatch, ownProps) => {
  return {
    processForm: () => dispatch(signup)
  }
}

connect(msp, mdp)(SessionForm)