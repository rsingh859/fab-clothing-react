import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';
import { signUpStart } from '../../redux/user/users.actions';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
    
    const [ userCreds, setUserCreds ] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const { displayName, email, password, confirmPassword } = userCreds;

    const handleSubmit = async event => {
        event.preventDefault();
        if(password !== confirmPassword ){
            alert('Passwords dont match');
            return;
        }

        signUpStart( displayName, email, password );
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCreds({...userCreds, [name] : value });
    }

    return(
        <div className='sign-up'>
            <h2>I dont have an account</h2>
            <span>Sign up with you email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='display name'
                    required
                    />

                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required
                    />

                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                    />

                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='confirm password'
                    required
                    />
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password ) => dispatch(signUpStart( { displayName, email, password } ))
});

export default connect(null, mapDispatchToProps)(SignUp);