export default function DataTable({ books, setOpenDialog, setBook, setRole, setOpenDeleteDialog, searchValue }) {
    const handleClickAdd = (item) => {
        setRole('edit');
        setBook(item);
        setOpenDialog(true);
    }

    const handleClickDelete = (item) => {
        setBook(item);
        setOpenDeleteDialog(true)
    }

    return (
        <div className="text-black">
            <table className="w-full">
                <tbody>
                    <tr className="flex w-full bg-[#E9E4E5]">
                        <th className="border-t-2 border-l-2 w-1/4 py-2 text-left ml-2">Judul</th>
                        <th className="border-t-2 border-l-2 w-1/4 py-2 text-left">Penulis</th>
                        <th className="border-t-2 border-l-2 w-1/4 py-2 text-left">Jumlah</th>
                        <th className="border-t-2 border-l-2 border-r-2 py-2 w-1/4">Tools</th>
                    </tr>
                    {
                        books?.data?.filter(item => {
                            if (searchValue === '')
                                return item;
                            return item.title.toUpperCase().includes(searchValue.toUpperCase());
                        }).map((item) => {
                            return (
                                <tr key={item?.id} className="w-full flex">
                                    <td className={`border-t-2 //border-l-2 ${item?.id === books?.data?.length ? "border-b-2" : ""} w-1/4 p-2`}>
                                        {item?.title}
                                    </td>
                                    <td className={`border-t-2 //border-l-2 ${item?.id === books?.data?.length ? "border-b-2" : ""} w-1/4 p-2`}>
                                        {item?.author}
                                    </td>
                                    <td className={`border-t-2 //border-l-2 ${item?.id === books?.data?.length ? "border-b-2" : ""} w-1/4 p-2`}>
                                        {5} buah
                                    </td>
                                    <td className={`border-t-2 //border-l-2 //border-r-2 ${item?.id === books?.data?.length ? "border-b-2" : ""} w-1/4 p-2 flex justify-center`}>
                                        <button onClick={() => handleClickAdd(item)} className="edit-logo hover:text-gray-500 transition duration-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button onClick={() => handleClickDelete(item)} className="trash-logo ml-5 text-red-400 hover:text-red-300 transition duration-150">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}