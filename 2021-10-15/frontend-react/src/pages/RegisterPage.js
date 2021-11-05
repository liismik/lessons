//+++
import MainLayout from "../components/layouts/MainLayout";
import React from "react";
import Register from '../components/Register';

const LoginPage = () => {
    return(
        <>
            <MainLayout>
                <Register />
            </MainLayout>
        </>
    );
}

export default LoginPage;