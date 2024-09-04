import React from 'react';
import About from "../../components/about/About";
import Title from "../../components/title/Title";

const MainPage = () => {
    const text = "hello world!";
    return (
        <div>
            <About info={{title: "Some Title", body:"Some body"}}/>
            <Title renata={text} />

        </div>
    );
};

export default MainPage;