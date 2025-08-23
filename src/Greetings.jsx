import PropTypes from "prop-types";

function Greetings({ isLoggedIn = false, username = "Guest" }) { // using props argument destructuring with default values, using props is not required
    const welcomeMsg = <h2 className="welcome-msg">Welcome back, {username}!</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue.</h2>;

    return (
        isLoggedIn ? welcomeMsg : loginPrompt
    );
}

Greetings.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
};

export default Greetings;
