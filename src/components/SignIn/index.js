import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './styles.scss';
import Buttons from './../Forms/Button';
import { signInWithGoogle, auth, handleUserProfile } from './../../firebase/utils'

import FormInput from './../Forms/FormInput';
import AuthWrapper from './../AuthWrapper';

const SignIn = props => {
    const [email, setEmail]= useState('');
    const[password, setPassword ] = useState('');
    
    const resetForm = () => {
        setEmail('');
            setPassword('');
    }

    const handleSubmit = async e => {
        e.preventDefault();
       
        try{

            await auth.signInWithEmailAndPassword(email, password);
            resetForm();
            props.history.push('/');
            
        } catch(err) {
            //console.log(err);
        }
    }

        
    const configAuthWrapper = {
        headline: 'Login'
    };
        
    return ( 
        <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>

                        <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e=> setEmail(e.target.value)}
                        />

                        <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                        />

                        <Buttons type="submit">
                            LogIn
                        </Buttons>
                        <br></br>
                        <div className="socialSignin">
                            <div className="row">
                                <Buttons onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Buttons>
                            </div>
                        </div>
                        
                        <div className="links">
                            <Link to="/recovery">
                                Reset Password
                            </Link>
                        </div>

                    </form>
                </div>
            </AuthWrapper>
         );
    }
    
    

 
export default withRouter(SignIn) ;