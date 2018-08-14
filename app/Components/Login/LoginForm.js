import React, { Component, Fragment } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import { includes } from 'lodash';
import './Login.css';
import history from '../../history';


const validate = (values) => {
    const error = {};
    const emailPattern = /(\w+)\@(\w+)\.[a-zA-Z]/g;
    let validEmail = emailPattern.test(values.email);

    if (!values.email) {
        error.email = "Required";
    } else if (!validEmail) {
        error.email = "Please Enter a Valid Email";
    }

    if (!values.password) {
        error.password = "Required";
    }
    return error;
}

const renderField = ({ label, type, input, meta: { touched, error } }) => (
    <Fragment>
        <FormGroup>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...input} type={type} autoComplete="off" />
            {touched && ((error && (<span className="errorTxt">{error}</span>)))}
        </FormGroup>
    </Fragment>
);


class LoginForm extends Component {
    constructor() {
        super();
    }

    onSubmitCall = (values) => {
        let email = values.email;
        let getDomain = email.substring(email.lastIndexOf("."));
        if (getDomain == ".com") {
            history.push('/com');
        } else if (getDomain == ".gov") {
            history.push('/gov');
        } else {
            alert("Not a valid Email");
        }
    }

    render() {
        const { handleSubmit, pristine, submitting, reset } = this.props;

        const handlePagesOnSubmit = (values) => {
            this.onSubmitCall(values);
        }

        return (
            
                <div className="formWrap">
                    <h1 className="signupTitle_1">  <br /> New to Professional? Sign Up</h1>
                    <form onSubmit={handleSubmit(handlePagesOnSubmit)}>
                        <Field name="email" component={renderField} type="text" label="Email" />
                        <Field name="password" component={renderField} type="password" label="Create Password" />
                        <div className="form-group">
                            <Button type="submit" className="createAccBtn">Create Account</Button>
                        </div>
                    </form>
                    <p className="signInTxt">Already a member? <a href="/login">Sign In </a> </p>
                </div>
        )
    }
}

const LoginCode = reduxForm({
    form: 'LoginForm',
    validate
})(LoginForm)

export default LoginCode;