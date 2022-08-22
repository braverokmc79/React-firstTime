import React, { useEffect, useState } from 'react';

const Clock = (props) => {
    const [dateTime, setDateTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        setInterval(() => {
            setDateTime(new Date().toLocaleTimeString());    
        }, 1000);      
    }, [dateTime]);
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간 {dateTime }</h2>
        </div>
    );
};
export default Clock;