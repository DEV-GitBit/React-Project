import PropTypes from "prop-types";

function Greetings(props) {
    const { isLoggedIn = false, username = "Guest" } = props; // Correct destructuring

    const welcomeMsg = <h2 className="welcome-msg">Welcome back, {props.username}!</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue.</h2>;

    return (
        props.isLoggedIn ? welcomeMsg : loginPrompt
    )
}
Greetings.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
};
export default Greetings;