import Popup from "@/Components/Admin/Popup";
import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";

export default function RegisterAdmin() {
    const userInitState = {
        name: null,
        email: null,
        password: null,
        phone: null,
    };

    const [user, setUser] = React.useReducer(
        (user, newDetails) => ({...user, ...newDetails}),
        userInitState
    );

    const [title, setTitle] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { "email": user.email, "password": user.password };
        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res?.error) {
                    setTitle(res?.error);
                    throw new Error('Oh no')
                } else {
                    setTitle('Berhasil Register');
                    setStatus(true);
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false);
                    }, 2000)
                }
            })
            .catch(() => {
                setStatus(false);
                setOpen(true);
                setTimeout(() => {
                    setOpen(false);
                }, 2000)
            })
    }

    return (
        <div className="flex w-full min-h-screen items-center justify-center flex-col">
            <h1 className="text-3xl font-bold text-center mt-20">Buat Akun Baru</h1>
            <form onSubmit={handleSubmit} className="w-4/5 md:w-2/5 p-8 shadow-2xl mt-14 rounded-lg mb-10">
                <div className="mb-6">
                    <label htmlFor="Name" className="block mb-2 text-sm text-gray-900 dark:text-gray-300 font-bold">Nama</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama anda" required onChange={e => setUser({name: e.target.value})} />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-gray-300 font-bold">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required onChange={e => setUser({email: e.target.value})}  />
                </div>
                <div className="mb-6">
                    <label htmlFor="Telepon" className="block mb-2 text-sm text-gray-900 dark:text-gray-300 font-bold">Telepon</label>
                    <input type="text" id="telepon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nomor telepon" defaultValue={user.phone} onChange={e => setUser({phone: e.target.value})}  pattern="^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$" maxLength={13} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-gray-300 font-bold">Password Anda</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={e => setUser({password: e.target.value})}  />
                </div>
                <button type="submit" className="bg-[#F8BC61] w-full p-2 hover:bg-yellow-600 hover:shadow-lg hover:border-yellow-600 border-[#F8BC61] border-2 transition duration-300 font-bold flex items-center justify-center rounded-lg">Daftar</button>
                <div className="mt-5">
                    <div>Sudah memiliki akun admin? <InertiaLink href="/dashboard-admin-login"><span className="text-yellow-600">Masuk</span></InertiaLink></div>
                </div>
                <Popup title={title} open={open} status={status} />
            </form>
        </div>
    );
}