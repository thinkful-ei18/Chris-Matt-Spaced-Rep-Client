import React from 'react';

import '../stylesheets/landing-page.css';

export function Instructions(props) {
    return (
        <main role="main" >
                <div className="login-form instruction-set" >
                    <header role="banner" ><h2 className="login-header">Instructions</h2></header>
                    <section role="region">
                        <header role="banner" ><h3 className="instructions-header" >General Instructions:</h3></header>
                        <p className="instructions" >
                            Welcome to Spanish Tutor, your source for adaptive learning! 
                            <br/><br/>
                            If you don't have an account, please click on the "Register" button to access the form.
                            <br/><br/>
                            Spanish Tutor is a quiz app designed to adapt to your learning needs.  This means that questions you get right more often will be asked later.  The questions you tend to get wrong will be asked again sooner.
                        </p>
                    </section>
                    <section role="region">                    
                        <header role="banner" ><h3 className="instructions-header" >How questions are stored:</h3></header>
                        <p className="instructions" >
                            The questions are stored in the database as a singly linked list.  Each question is initialized for a new user with an "m" value of 1.  If a question is answered correctly, "m" is multiplied by 2 and is moved 2*m down the singly linked-list.  If a question is answered incorrectly, "m" reset to 1 and is added after next question.
                            <br/><br/>
                        </p>
                    </section>
                </div>
        </main>
    );
}

export default Instructions;