import { Inertia } from "@inertiajs/inertia";
import { motion } from "framer-motion";

export default function DeleteBookForm({ openDeleteDialog, setOpenDeleteDialog, book, setBook, setTitle, setOpen, setStatus }) {

    const handleClick = (e, id) => {
        e.preventDefault();
        if (book?.id !== null) {
            console.log(id)
            Inertia.post('/admin/delete', {
                'id': book?.id,
            })
        }
    }

    return (
        <div id="authentication-modal" tabIndex="-1" className={`overflow-y-auto ${openDeleteDialog ? "" : "hidden"} overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center flex `} aria-modal="true" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.47)' }}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white rounded-lg shadow-xl dark:bg-gray-700">
                    <button onClick={() => {
                        setBook(null);
                        setOpenDeleteDialog(false)
                    }} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="py-6 px-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Hapus</h3>
                        <p className="mb-4">Apakah anda yakin ingin menghapus item ini ({book?.title})?</p>
                        <p>{book?.id}</p>
                        <button className="bg-[#F8BC61] 
                                hover:bg-yellow-600 duration-200 focus:outline-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center text-black" onClick={(e) => {
                                // e.preventDefault();
                                handleClick(e, book?.id)
                            }}>Hapus Item</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}