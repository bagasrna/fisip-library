import React from "react";
import Popup from "@/Components/Admin/Popup";
import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import $ from 'jquery';

export default function LoginAdmin() {
    const { data, setData, post, processing } = useForm({
        email: '',
        password: '',
      })
    const [title, setTitle] = React.useState('');
    const [status, setStatus] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [token, setToken] = React.useState('');
    let Token = $('meta[name="csrf-token"]').attr('content');

    React.useEffect(() => {
    setToken(Token);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/signin', data)
    }

    return (
        <div className="flex w-full min-h-screen items-center justify-center flex-col">
            <h1 className="text-3xl font-bold text-center">Masuk ke Akun Admin</h1>
            <form onSubmit={handleSubmit} className="w-4/5 md:w-2/5 p-8 shadow-2xl mt-14 rounded-lg">
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-gray-300 font-bold">Email</label>
                    <input type="email" id="email" className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name"  defaultValue={data.email} onChange={(e) => setData('email', e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm text-gray-900 dark:text-gray-300 font-bold">Your password</label>
                    <input type="password" id="password" className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required defaultValue={data.password} onChange={(e) => setData('password', e.target.value)}/>
                </div>
                {/* <input type="hidden" name="_token" value={token}/> */}
                <button type="submit" className="bg-[#F8BC61] w-full p-2 hover:bg-yellow-600 hover:shadow-lg hover:border-yellow-600 border-[#F8BC61] border-2 transition duration-300 font-bold flex items-center justify-center rounded-lg">Masuk</button>
                <div className="mt-5">
                    <div>Belum punya akun admin? <InertiaLink href="/admin/signup"><span className="text-yellow-600">Daftar</span></InertiaLink></div>
                </div>
            </form>
            <Popup title={title} open={open} status={status} />
        </div>
    );
}