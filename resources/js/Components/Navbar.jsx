import Input from "@/Components/Input";
import React from "react";
import Button from "./Button";
import $ from "jquery";

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [isShadowed, setIsShadowed] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200)
                setIsShadowed(true);
            else
                setIsShadowed(false)
        })
    }, [])

    const handleClick = () => {
        fetch('/signout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr('content'),
            },
        })
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const dropDownData = [
        {
            id: 1,
            name: "Profile",
            href: "#",
            action: () => { }
        },
        {
            id: 3,
            name: "Sign Out",
            href: "",
            action: handleClick
        },
    ]

    return (
        <nav className={`flex z-50 pl-20 pr-5 justify-between flex-col lg:flex-row lg:items-center fixed w-full top-0 ${isShadowed ? "drop-shadow-xl" : ""} `} style={{ backgroundColor: "#E9E4E5" }}>
            <div className="nav-logo w-2/12">
                <img src="/images/logo.svg" className="rotate-90" width="25" />
            </div>
            <div className="search-box w-3/5 hidden lg:block">
                <form className="w-full">
                    <Input placeholder="Cari berdasarkan judul buku atau penulis" className="border-orange-300 w-full" />
                </form>
            </div>
            <div className="search-buttons w-2/5 justify-end hidden lg:flex">
                <Button className="bg-amber-400 text-black py-2">Rak Buku</Button>
                <Button className="bg-amber-400 text-black py-2 lg:ml-3">Perpustakaan</Button>
            </div>
            <div className={`collapse ${open ? "" : "hidden"} lg:hidden flex w-full flex-col items-center pb-5`}>
                <div className="search-box w-full">
                    <form className="w-full">
                        <Input placeholder="Cari berdasarkan judul buku atau penulis" className="border-orange-300 w-full mb-5 -ml-6" />
                    </form>
                </div>
                <div className="search-buttons flex flex-col justify-around w-full -ml-12">
                    <Button className="bg-amber-400 text-black mb-2">Rak Buku</Button>
                    <Button className="bg-amber-400 text-black mb-2">Perpustakaan</Button>
                    <DropDownButton className="w-full flex justify-center" datas={dropDownData} action={handleClick} setOpenDialog={setOpenDialog} openDialog={openDialog} beginningIcon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            } />
                </div>
            </div>
            <Button className="absolute right-10 top-8 lg:hidden bg-transparent" onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Button>
            <DropDownButton className="justify-center hidden lg:flex lg:ml-3" datas={dropDownData} action={handleClick} setOpenDialog={setOpenDialog} openDialog={openDialog} beginningIcon={
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            } />
        </nav>
    );
}

export const DropDownButton = ({ openDialog, setOpenDialog, beginningIcon, datas, className }) => {
    return (
        <div className={className}>
            <div className="w-full">
                <div className="dropdown relative">
                    <button
                        onClick={() => setOpenDialog(!openDialog)}
                        className="dropdown-toggle px-2 py-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-[#ba4848] hover:bg-[#a03737] hover:shadow-lg active:bg-[#BF4242] active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap w-full"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {beginningIcon}
                        <span className="ml-2">
                            Akun Saya
                        </span>
                        <svg
                            // aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            className="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                        </svg>
                    </button>
                    <ul
                        className={`dropdown-menu ${openDialog ? "" : "hidden"} min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none w-fit`}
                        aria-labelledby="dropdownMenuButton1"
                    >
                        {
                            datas.map(item => (
                                <li key={item.id} className="w-full">
                                    <button
                                        onClick={item.action}
                                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                        href={item.href}>{item.name}
                                        </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}