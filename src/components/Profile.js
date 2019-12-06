import React, { Component } from 'react'; //import React Component
import SignUpForm from './SignUpForm';
import '../App.css'; //load module CSS

class ProfilePage extends Component {

    render() {
        let content = null;

        if (!this.props.user) { //if logged out, show signup form
            content = (
                <div className="container">

                    <SignUpForm
                        signUpCallback={this.props.handleSignUp}
                        signInCallback={this.props.handleSignIn}
                    />
                </div>
            );
        }
        else { //if logged in, show welcome message
            content = (
                <div className="container">

                    <WelcomeHeader user={this.props.user} />

                    <button className="btn btn-warning" onClick={this.props.handleSignOut}>
                        Log Out {this.props.user.displayName}
                    </button>
                    
                </div>
            );
        }

        return (
            <div>
                {this.props.errorMessage &&
                    <p className="alert alert-danger">{this.props.errorMessage}</p>
                }
                {content}
            </div>
        );
    }
}

class WelcomeHeader extends Component {
    render() {
        return (
            <header className="container">
                <h1>
                    Welcome {this.props.user.displayName}!
            {' '}
                    <img className="avatar" src={this.props.user.photoURL} alt={this.props.user.displayName} />
                </h1>
                {this.props.children} {/* for button */}
            </header>
        );
    }
}

export default ProfilePage;