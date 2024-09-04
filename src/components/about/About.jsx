import React from 'react';

const About = ({info}) => {
    return (
        <div>
            <span>{info.body}</span>
            <span>{info.title}</span>
        </div>
    );
};

export default About;
