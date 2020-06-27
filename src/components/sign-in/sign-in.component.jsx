import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.components';

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }

    changeHandle = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }


    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput name='email' type='email' value={this.state.email} label='email' required handleChange={this.changeHandle}/>


                    <FormInput name='password' type='password' value={this.state.password} label='password' required handleChange={this.changeHandle}/>

                    <CustomButton type='submit' value='Submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn
