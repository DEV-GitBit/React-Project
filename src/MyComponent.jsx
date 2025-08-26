import React, {useState} from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    const onButtonClick = () => {
        setCount(count + 1);
    }

    return (
        <div className='my-component'>
            <p>You clicked {count} times</p>
            <button onClick={onButtonClick}>Click me</button>
        </div>
    );
}
export default MyComponent;