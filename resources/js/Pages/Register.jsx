import Button from "@/Components/Button";
import Input from "@/Components/Input";
import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

export default function Register() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="flex flex-col h-screen lg:flex-row">
            <div className="w-full flex items-center lg:w-2/4" style={{ backgroundColor: "#FDF4AF" }}>
                <div className="flex flex-col justify-center items-center lg:items-start w-full">
                    <img className="ml-10 rotate-90 lg:rotate-0 w-16 lg:w-24 lg:mt-10 mr-10 lg:mr-0 -mt-20" src="/images/logo.svg" />
                    <img className="lg:ml-52 lg:absolute -mt-20 lg:mt-0 rotate-90 lg:rotate-0 w-44 lg:w-60 h-fit" src="/images/login_image.svg" />
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                <div className="text-center w-full flex flex-col items-center justify-center m-auto py-10 px-10 lg:px-32 lg:py-0">
                    <h3 className="text-5xl mb-5">Daftar</h3>
                    <form className="w-full flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                        <div className="text-left w-full">
                            <h4 className="mb-3">Username</h4>
                            <Input className="w-full mb-6" placeholder="Masukkan username" type="text" required />
                        </div>
                        <div className="text-left w-full">
                            <h4 className="mb-3">Email/No.Hp</h4>
                            <Input className="w-full mb-6" placeholder="Masukkan e-mail atau no. hp" required />
                        </div>
                        <div className="text-left w-full">
                            <h4 className="mb-3">Password</h4>
                            <Input className="w-full" type="password" placeholder="Masukkan password" required />
                        </div>
                        <div className="w-full mt-10 flex items-center flex-col lg:flex-row justify-between">
                            <div>
                                <p className="text-left">Sudah punya akun? <InertiaLink className="text-red-800" href="/login">Masuk</InertiaLink></p>
                            </div>
                            <div className="float-right mt-5 w-full lg:mt-0 lg:w-fit">
                                <Button className="rounded-none bg-amber-400 text-black w-1/4 lg:w-fit flex items-center justify-center" type="submit">Daftar</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}