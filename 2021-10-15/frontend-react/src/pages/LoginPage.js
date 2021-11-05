import MainLayout from "../components/layouts/MainLayout";
import React from "react";
import Login from '../components/Login';

const LoginPage = () => {
    return(
        <>
            <MainLayout>
                <Login />
            </MainLayout>
        </>
    );
}

export default LoginPage;