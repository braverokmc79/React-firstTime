import React, { useState } from 'react';

const ConfirmButton = (props) => {

    const [isConfirmd, setIsConfirmd] = useState(false);

    const handleConfirm = () => {
        //console.log();
        //setIsConfirmd((prevIsConfirmed) => !prevIsConfirmed);
        //setIsConfirmd((a) => !a);
        setIsConfirmd((a) => {
            console.log("a  ", a);
            return !a;
         });
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmd}>
            {isConfirmd ? "확인됨" :"확인하기"}
        </button>
    );
};
export default ConfirmButton;