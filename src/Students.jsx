import PropTypes from 'prop-types';

function Students({ name = 'Unknown', age = 0, isEnrolled = false }) {
    return (
        <div className='student-card'>
            <h2>Student Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Enrolled: {isEnrolled ? 'Yes' : 'No'}</p>
        </div>
    );
}

Students.propTypes = { // Type checking for props does not give errors, it just gives warnings in the console.
    name: PropTypes.string,
    age: PropTypes.number,
    isEnrolled: PropTypes.bool,
};

export default Students;
