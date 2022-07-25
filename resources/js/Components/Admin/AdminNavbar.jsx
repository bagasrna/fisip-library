import React from "react";
import axios from "axios";
import $ from 'jquery';
import { Inertia } from "@inertiajs/inertia";

export default function AdminNavbar({ className, name }) {
    const [open, setOpen] = React.useState(true);
    const [width, setWidth] = React.useState(true);

    const handleClick = () => {
        Inertia.post('/admin/signout')
    }

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })

    React.useEffect(() => {
        if (width > 1024) {
            setOpen(true);
        } else if (width < 1024) {
            setOpen(false);
        }
    }, [width])

    React.useEffect(() => {
        if (window.innerWidth > 1024) {
            setOpen(true);
            setWidth(1025);
        }
    }, [])

    const navbarData = [
        {
            id: 1,
            name: "Data Buku",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>,
            action: () => { }
        },
        {
            id: 2,
            name: "Keluar",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>,
            action: handleClick
        }
    ]

    return (
        <div className={`bg-[#F8BC61] lg:w-1/5 w-full relative`}>
            {
                open &&
                <div className={` ${width < 1024 ? "fixed top-6 shadow-2xl bg-[#F8BC61] w-full" : ""}`}>
                    <div className="admin-data p-5 mt-16 w-full lg:mt-5">
                        <p className="font-bold text-3xl">Welcome</p>
                        <p className="font-bold mt-5">{name}</p>
                        <div className="flex items-center w-full">
                            <p>example@student.ub.ac.id</p>
                        </div>
                    </div>
                    <div className="mt-5 text-sm font-bold">
                        <p className="pt-5 px-5 mb-5">Dashboard</p>
                        <div>
                            {
                                navbarData?.map(item => {
                                    return (
                                        <button onClick={item.action} className="w-full flex items-center p-5 hover:bg-gray-600 hover:text-white bg-transparent transition duration-200" key={item.id}>
                                            {item.icon}
                                            <p className="ml-2 font-normal">{item.name}</p>
                                        </button>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            }
            <div className="py-5 pr-5 pl-0 flex justify-between lg:hidden w-full lg:w-fit fixed top-0 bg-[#F8BC61]">
                <button onClick={() => setOpen(!open)} className="text-white p-2 rounded-lg bg-red-500 ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
                { !open && <div className="font-bold text-3xl mr-5">Welcome, <span className="text-lg font-normal">{name}</span></div> }
            </div>
        </div>
    );
}