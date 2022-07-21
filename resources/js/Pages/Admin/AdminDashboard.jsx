import AdminNavbar from "@/Components/Admin/AdminNavbar";
import BookForm from "@/Components/Admin/BookForm";
import DataTable from "@/Components/Admin/DataTable";
import DeleteBookForm from "@/Components/Admin/DeleteBookForm";
import React from "react";

export default function AdminDashboard() {
    const [bookData, setBookData] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [book, setBook] = React.useState(null);
    const [role, setRole] = React.useState('');
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

    React.useEffect(() => {
        setBookData(JSON.parse(localStorage.getItem('books')));
    }, [])

    return (
        <div>
            <div className="dashboard-container min-h-screen flex lg:flex-row flex-col">
                <AdminNavbar />
                <div className="book-data w-full h-screen overflow-y-scroll">
                    <div className="px-10 pt-10 pb-5 flex items-center justify-between w-full">
                        <p className="text-2xl font-bold">Data Buku</p>
                        <button onClick={() => { 
                            setRole('tambah');
                            setBook({});
                            setOpenDialog(true);
                            }} className="bg-[#F8BC61] p-2 hover:bg-yellow-600 hover:shadow-lg hover:border-yellow-600 border-[#F8BC61] border-2 transition duration-300 font-bold flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="ml-2">Tambah Buku</p>
                        </button>
                    </div>
                    <div className="search-bar pl-10 mb-5">
                        <form className="w-2/5">
                            <input className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="cari berdasarkan judul atau penulis" />
                            <input className="hidden" type="submit" />
                        </form>
                    </div>
                    <div className="result pl-10 mb-5">
                        <p>Showing {bookData?.data?.length} of {bookData?.total} result</p>
                    </div>
                    <div className="px-10 mb-10">
                        <DataTable books={bookData} setOpenDeleteDialog={setOpenDeleteDialog} setOpenDialog={setOpenDialog} setBook={setBook} setRole={setRole}/>
                    </div>
                </div>
            </div>
            <div>
                <BookForm books={bookData} setOpenDialog={setOpenDialog} setBook={setBook} openDialog={openDialog} book={book} role={role}/>
            </div>
            <div>
                <DeleteBookForm book={book} setBook={setBook} openDeleteDialog={openDeleteDialog} setOpenDeleteDialog={setOpenDeleteDialog}/>
            </div>
        </div>
    );
}