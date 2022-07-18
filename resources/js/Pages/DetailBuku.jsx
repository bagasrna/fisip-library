import CustomFooter from "@/Components/CustomFooter";
import Navbar from "@/Components/Navbar";
import React from "react";

export default function DetailBuku() {
    const [searchValue, setSearchValue] = React.useState('');
    const [bookData, setBookData] = React.useState({});
    const [selectDetail, setSelectDetail] = React.useState(true);
    const [selectSinopsis, setSelectSinopsis] = React.useState(false);

    const getBookDetail = () => {
        // fetch(`https://www.googleapis.com/books/v1/volumes/${localStorage.getItem("bookId")}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setBookData(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        let Data = localStorage.getItem('bookData');
        console.log(JSON.parse(Data));
        setBookData(JSON.parse(Data));
    }

    React.useEffect(() => {
        getBookDetail();
    }, [])

    const handleDetail = () => {
        setSelectDetail(true);
        setSelectSinopsis(false);
    }

    const handleSinopsis = () => {
        setSelectDetail(false);
        setSelectSinopsis(true);
    }

    return (
        <div>
            <Navbar userName={localStorage.getItem("UserName")} setSearchValue={setSearchValue} />
            {bookData === null ? <div></div> :
                <div className="mt-32 md:mt-40 md:mb-20 w-full p-10 flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start">
                    <div className="detail-image lg:w-1/5">
                        <div className="w-full bg-[#E9E4E5] rounded-md py-3 px-5">
                            <img src={bookData?.volumeInfo?.imageLinks?.smallThumbnail} width="100%" />
                        </div>
                    </div>
                    <div className="detail-content w-full md:w-3/5 lg:ml-20">
                        <div className="flex items-center lg:items-start justify-between flex-col lg:flex-row mt-5 mb-10 lg:mt-0 lg:mb-0">
                            <div className="book-title text-center lg:text-start">
                                {/* <h1 className="text-3xl font-bold">{bookData?.volumeInfo?.title}</h1> */}
                                <h1 className="text-3xl font-bold">{bookData?.title}</h1>
                                {/* <p className="mt-2">{bookData?.volumeInfo?.authors}</p> */}
                                <p className="mt-2">{bookData?.author}</p>
                            </div>
                            <div className="star-rating flex mt-5 lg:mt-0">
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                        </div>
                        <div className="tabs flex items-center justify-between mb-3 lg:mt-7">
                            <div className="w-2/5">
                                <h3 onClick={handleDetail} className={`cursor-pointer border-b-2 transition duration-300 ${selectDetail ? 'border-gray-900' : 'border-transparent'} md:text-center pb-2`}>Detail Buku</h3>
                            </div>
                            <div className="w-2/5">
                                <h3 onClick={handleSinopsis} className={`cursor-pointer border-b-2 ${selectSinopsis ? 'border-gray-900' : 'border-transparent'} transition duration-300  md:text-center pb-2`}>Sinopsis</h3>
                            </div>
                        </div>
                        {
                            selectDetail ? <div className="flex flex-wrap justify-between w-4/5 md:text-center lg:text-left">
                                <div>
                                    <div className="my-7">
                                        <h4 className="font-bold">ISBN</h4>
                                        {/* <p>{bookData?.volumeInfo?.industryIdentifiers[0]?.identifier}</p> */}
                                        <p>{bookData?.id}</p>
                                    </div>
                                    <div className="my-7">
                                        <h4 className="font-bold">Jumlah Stok</h4>
                                        <p>5 Buah</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="my-7">
                                        <h4 className="font-bold">Penerbit</h4>
                                        {/* <p>{bookData?.volumeInfo?.publisher}</p> */}
                                        <p>{bookData?.category_id}</p>
                                    </div>
                                    <div className="my-7">
                                        <h4 className="font-bold">Bahasa</h4>
                                        <p>{bookData?.created_at}</p>
                                        {/* <p>{bookData?.volumeInfo?.language}</p> */}
                                    </div>
                                </div>
                            </div> 
                            : 
                            // <div className="mt-10" dangerouslySetInnerHTML={{__html: bookData?.volumeInfo?.description}}></div>
                            <div className="mt-10" dangerouslySetInnerHTML={{__html: bookData?.description}}></div>
                        }

                    </div>
                </div>
            }
            <CustomFooter />
        </div>
    );
}