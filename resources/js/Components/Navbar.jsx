import Input from "@/Components/Input";
import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Button from "./Button";

export default function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <nav className="flex z-50 pl-20 pr-5 justify-between flex-col lg:flex-row lg:items-center fixed w-full top-0" style={{ backgroundColor: "#E9E4E5" }}>
            <div className="nav-logo w-2/12">
                <img src="/images/logo.svg" className="rotate-90" width="25" />
            </div>
            <div className="search-box ml-10 w-2/5 hidden lg:block">
                <form className="w-full">
                    <Input placeholder="Cari berdasarkan judul buku atau penulis" className="border-orange-300 w-full" />
                </form>
            </div>
            <div className="search-buttons w-1/3 justify-between hidden lg:flex">
                <Button className="bg-amber-400 text-black">Rak Buku</Button>
                <Button className="bg-amber-400 text-black">Perpustakaan</Button>
                <Button className="bg-red-500 text-black">Masuk</Button>
            </div>
            <div className={`collapse ${open ? "" : "hidden"} lg:hidden flex w-full flex-col items-center pb-5`}>
                <div className="search-box w-full">
                    <form className="w-full">
                        <Input placeholder="Cari berdasarkan judul buku atau penulis" className="border-orange-300 w-full mb-5 -ml-5" />
                    </form>
                </div>
                <div className="search-buttons flex justify-around w-full -ml-12">
                    <Button className="bg-amber-400 text-black">Rak Buku</Button>
                    <Button className="bg-amber-400 text-black">Perpustakaan</Button>
                    <Button className="bg-red-500 text-black">Masuk</Button>
                </div>
            </div>
            <Button className="absolute right-10 top-8 lg:hidden bg-transparent" onClick={() => setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </Button>
        </nav>
    );
}