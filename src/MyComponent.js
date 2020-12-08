import React from 'react';
import './App.css';

const MyComponent = props => {
    return (
        <div className="react">
            제 이름은 {props.name}입니다. <br />
            children 값은 {props.children} 입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'basic react',
};

export default MyComponent;