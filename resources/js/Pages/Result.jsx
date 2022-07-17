import Navbar from '../Components/Navbar';
import React from 'react';
import CardBook from '@/Components/CardBook';
import CustomFooter from '@/Components/CustomFooter';

export default function Result() {
    const [searchValue, setSearchValue] = React.useState('');
    const [bookDatas, setBookDatas] = React.useState([]);
    const temp = "temp";

    const fetchingData = async (searchValue) => {
        setBookDatas([]);
        await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
            .then(res => res.json())
            .then(res => {
                if (res.items !== undefined) {
                    res.items.forEach(item => {
                        setBookDatas((prev) => [...prev, item])
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    React.useEffect(() => {
        setSearchValue(localStorage.getItem("searchValue"));
    }, [temp])

    React.useEffect(() => {
        if(searchValue !== '')
        fetchingData(localStorage.getItem("searchValue"));
    }, [searchValue]);

    const handleClick = (id) => {
        localStorage.setItem("bookId", id);
    }


    return (
        <div>
            <Navbar searchValue={searchValue} userName={localStorage.getItem("UserName")} setSearchValue={setSearchValue} />
            <div className='mt-40 pb-9'>
                <div className='flex flex-wrap justify-center min-h-screen'>
                    {
                        bookDatas.length !== 0 ? 
                        bookDatas.map(item => (
                            <a onClick={() => handleClick(item.id)} key={item.id} href='/detail' className='m-5 min-w-[25%]'>
                                <CardBook title={item.volumeInfo?.title} author={item.volumeInfo?.authors} publisher={item?.publisher} rate={'5.0'} image={item.volumeInfo.imageLinks?.smallThumbnail}/>
                            </a>
                        )) : <p>Maaf, hasil tidak ditemukan</p>
                    }
                </div>
            </div>
            <CustomFooter/>
        </div>
    );
}