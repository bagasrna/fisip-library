import Button from "@/Components/Button";
import Input from "@/Components/Input";
import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

export default function Login() {
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
                    <h3 className="text-5xl mb-5 font-bold">Masuk</h3>
                    <div className="max-w-4xl px-4 text-gray-800 bg-white rounded-lg">
                        <div className="mb-2 relative">
                            <div className="h-3 text-3xl text-left text-gray-600">“</div>
                            <p className="px-4 text-base text-center leading-8 text-gray-600">
                            Makin aku banyak membaca, makin aku banyak berpikir; makin aku banyak belajar, makin aku sadar bahwa aku tak mengetahui apa pun
                            </p>
                            <div className="text-3xl text-right text-gray-600 lg:-mt-5 mr-10">”</div>
                            <p className="md:mt-2 text-lg font-bold">- Voltaire -</p>
                        </div>
                    </div>
                    <a href="auth/google" className="w-full mt-5">
                        <button className="flex w-1/2 bg-[#F8BC61] focus:bg-[#d8b073] fill-black text-black border-[#F8BC61] border-2  hover:bg-white justify-center items-center bg-transparent border-1 p-2 m-auto duration-300 hover:drop-shadow-lg transition-all hover:rounded-xl">
                            <img src="/images/google-icon.svg" width="20" />
                            <span className="ml-2">Google</span>
                        </button>
                    </a>
                    <p className="mt-5">Login dengan Email UB</p>
                </div>
            </div>
        </div>
    );
}