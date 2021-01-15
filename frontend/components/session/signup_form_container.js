import { connect } from 'react-redux'
import SessionForm from './session_form'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        errors: state.errors["session"],
        formType: 'signup',
        ownProps,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    debugger
    return {
        processForm: (user) => dispatch(signup(user)),
        ownProps
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)