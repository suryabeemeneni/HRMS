import React from 'react';
import './Login.css'

const LoginForm = ({close}) => {
    return (
        <>
            <div className='popup'>
                <div className='LoginForm'>
                    <span  className='LoginFormClose'>
                    <h3 style={{width:'95%', textAlign:'center'}}>Get Started</h3>
                    <p>❌</p>
                    </span>
                    <div className='LoginForm-Google'>
                        <img src='https://in.bmscdn.com/webin/common/icons/googlelogo.svg' alt='google' />
                        <p>Continue with Google</p>
                    </div>
                    <div className='LoginForm-or'>or</div>
                    <div className='LoginForm-Phn'>
                        <img src='https://in.bmscdn.com/webin/common/icons/indianflag.svg'/>
                        <span>+91</span>
                        <input type='number'/>
                    </div>
                    <div className='LoginForm-or'>or</div>
                    <div className='LoginForm-form'>
                        <input type='text' placeholder='UserName'/>
                        <br/>
                        <input type='text' placeholder='Password'/>
                        <br/>
                        <p>
                            Forget Password
                        </p>
                        <br/>
                        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'30px', marginTop:'30px'}}>
                        <button style={{width:'fit-content', background:'cadetblue', border : 'none', borderRadius:'5px', padding:'7px 20px', fontSize:'100%'}}>
                            Login
                        </button>
                        <p>
                            Create an account now <span style={{fontSize:'130%'}}>SignUp</span>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;