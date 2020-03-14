import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in-sign-up.styles.scss';

const SignInSignUpPage = () => (
    <div className="sign-in-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignUpPage;
