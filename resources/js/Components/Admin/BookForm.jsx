import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import $ from 'jquery';

export default function BookForm({ setOpenDialog, openDialog, book, setBook, role, setStatus, setTitle, setOpen }) {
    const bookInitState = {
        title: '',
        description: '',
        author: '',
        link: '',
        category_id: null
    }

    const [newBook, setNewBook] = React.useReducer(
        (newBook, newBooks) => ({...newBook, ...newBooks}),
        bookInitState
    );

    // 'title' => 'required|max:255',
    //         'description' => 'required',
    //         'author' => 'required',
    //         'link' => 'required',
    //         'category_id' => 'required',
    const addBookHandler = (e) => {
        e.preventDefault();
        console.log(`
            'title': ${newBook.title},
            'description': ${newBook.description},
            'author': ${newBook.author},
            'link': ${newBook.link},
            'category_id': ${newBook.category_id}
            `)
            
        Inertia.post('/admin/create', {
            'title': newBook.title,
            'description': newBook.description,
            'author': newBook.author,
            'link': 'newBook.link',
            'category_id': 1
        })
        // axios.post('/admin/create', {
        //     'title': newBook.title,
        //     'description': newBook.description,
        //     'author': newBook.author,
        //     'link': newBook.link,
        //     'category_id': 1
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        //     }
        // })
        // // .then(res => res.json())
        // .then(res => {
        //     setOpenDialog(false);
        //     if (res?.statusText !== 'OK') {
        //         setTitle(res?.error);
        //         throw new Error('error')
        //     } else {
        //         setTitle('Berhasil Menambahkan Buku');
        //         setStatus(true);
        //         setOpen(true);
        //         setTimeout(() => {
        //             setOpen(false);
        //             window.location.reload();
        //         }, 2000)
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        //     console.log(`
        //     'title': ${newBook.title},
        //     'description': ${newBook.description},
        //     'author': ${newBook.author},
        //     'link': ${newBook.link},
        //     'category_id': ${newBook.category_id}
        //     `)
        //     setTitle('Gagal menambahkan Buku');
        //     setStatus(false);
        //     setOpen(true);
        //     setTimeout(() => {
        //         setOpen(false);
        //     }, 2000)
        // })
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({"name": "morpheus", "job": "leader"})
        // })
        // .then(res => res.json())
        // .then(res => {
        //     setOpenDialog(false);
        //     if (res?.error) {
        //         setTitle(res?.error);
        //         throw new Error('error')
        //     } else {
        //         setTitle('Berhasil Menambahkan Buku');
        //         setStatus(true);
        //         setOpen(true);
        //         setTimeout(() => {
        //             setOpen(false);
        //             window.location.reload();
        //         }, 2000)
        //     }
        // })
    }

    const editBookHandler = (e, id) => {
        e.preventDefault();
        Inertia.post('/admin/update', {
            'id': id,
            'title': newBook.title,
            'description': newBook.description,
            'author': newBook.author,
            'link': newBook.link,
            'category_id': 2
        })
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        if (role === 'tambah') {
            // fetch to add book
            addBookHandler(e)
        }
        else if (role === 'edit') {
            // fetch to edit book
            editBookHandler(e, book?.id);
        }
    }

    return (
        <div id="authentication-modal" tabIndex="-1" className={`overflow-y-auto ${openDialog ? "" : "hidden"} overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center flex `} aria-modal="true" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.47)' }}>
            {
                book === null ? <></> :
                    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            exit={{ y: -10, opacity: 0 }}
                            className="relative block bg-white rounded-lg shadow-xl dark:bg-gray-700">
                            <button onClick={() => {
                                setBook(null);
                                setOpenDialog(false)
                            }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="py-6 px-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{
                                    role === 'tambah' ? 'Tambahkan Buku' : 'Edit Buku'
                                }</h3>
                                <form onSubmit={handleSubmit} className="flex items-start justify-between" action="#">
                                    <div className="w-3/5">
                                        <div className="mb-5">
                                            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Judul Buku</label>
                                            <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="book title" required defaultValue={book?.title} onChange={(e) => setNewBook({title: e.target.value})}/>
                                        </div>
                                        <div className="flex items-center mb-5">
                                            <div>
                                                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Nama Penulis</label>
                                                <input type="text" name="author" placeholder="contoh nama penulis" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required defaultValue={book?.author}  onChange={(e) => setNewBook({author: e.target.value})}/>
                                            </div>
                                            <div className="ml-5">
                                                <label htmlFor="isbn" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">ISBN</label>
                                                <input type="text" name="ISBN" placeholder="ISBN" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required defaultValue={book?.id} />
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-5">
                                            <div>
                                                <label htmlFor="link" className="block mb-2 text-sm font-boldtext-gray-900 dark:text-gray-300 font-bold">Link</label>
                                                <input type="text" name="link" placeholder="link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required defaultValue={book?.link} onChange={(e) => setNewBook({link: e.target.value})}/>
                                            </div>
                                            <div className="ml-5">
                                                <label htmlFor="category" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Kategori</label>
                                                <select name="category" placeholder="kategori" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-[157px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required  onChange={e => setNewBook({category_id: e.target.value})}>
                                                    <option value={1} className="w-full">Web Programming</option>
                                                    <option value={2} className="w-full">Anime</option>
                                                    <option value={3} className="w-full">Personal</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button type="submit" className="w-full bg-[#F8BC61] 
                                hover:bg-yellow-600 duration-200 focus:outline-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center text-black">
                                            {
                                                role === 'tambah' ? 'Tambahkan Buku' : 'Edit Buku'
                                            }
                                        </button>
                                    </div>
                                    <div className="ml-5 w-2/5">
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Deskripsi</label>
                                            <textarea type="text" name="description" placeholder="deskripsi" className="bg-gray-50 min-h-[222px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required defaultValue={book?.description}  onChange={(e) => setNewBook({description: e.target.value})}/>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </motion.div>
                    </div>
            }
        </div>
    );
}