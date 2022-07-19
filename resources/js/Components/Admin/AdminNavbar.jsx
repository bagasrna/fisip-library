import React from "react";

export default function AdminNavbar({ className }) {
    const [active, setActive] = React.useState(true);

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
            action: () => { }
        }
    ]

    return (
        <div className="bg-[#F8BC61] lg:w-1/5 w-full">
            <div className="admin-data p-5 mt-5 w-full">
                <p className="font-bold text-3xl">Welcome</p>
                <p className="font-bold mt-5">Redomeire</p>
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
                                <button className="w-full flex items-center p-5 hover:bg-gray-600 hover:text-white bg-transparent transition duration-200" key={item.id}>
                                    {item.icon}
                                    <p className="ml-2 font-normal">{item.name}</p>
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}