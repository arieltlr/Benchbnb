import { connect } from 'react-redux'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        errors: state.errors["session"],
        formType: 'login',
        ownProps,
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    debugger
    return {
        processForm: (user) => dispatch(login(user)),
        receiveErrors: error => dispatch(receiveErrors(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)