import React from 'react';

const ScocialMediaLogin = ({buttonIcon,buttonName}) => {
    return (
        <div>
            <button className='btn flex text-center p-2 '>{buttonIcon}{buttonName}</button>
        </div>
    );
};

export default ScocialMediaLogin;