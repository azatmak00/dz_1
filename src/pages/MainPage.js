import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";
import Input from "../components/input/Input";

const MainPage = () => {
    return (
        <>
            <Header/>
            <h1>hello</h1>
            <Button name={"add"} color={"primary"}/>
            <Button name={"delete"} color={"default"}/>
            <Button name={"save"} color={"error"}/>
            <Input placeholder={'name'} color={'name'}/>
            <Input placeholder={'surname'} color={'surname'}/>
            <Input placeholder={'email'} color={'email'}/>
            <Footer/>
        </>
    );
};

export default MainPage;