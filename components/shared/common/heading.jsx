// components/shared/Heading.js
import React from 'react';

const Heading = ({ text, style }) => {

    return (
        <div className={`${style} md:text-[40px] text-2xl font-black py-5  text-center`} >
            {text}
        </div>
    );
};

export default Heading;
