import Navbar from '../Components/Navbar';
import { useLocation } from 'react-router-dom';
import React from 'react';
import CardBook from '@/Components/CardBook';

export default function Result() {
    const [searchValue, setSearchValue] = React.useState('');
    const [bookDatas, setBookDatas] = React.useState([]);
    const temp = "temp";
    let datas = [];

    const fetchingData = () => {
        setBookDatas([]);
        if (searchValue !== '') {
            console.log(searchValue);
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
                .then(res => res.json())
                .then(res => {
                    if (res.items !== undefined)
                        res.items.forEach(item => {
                            // setBookDatas((prev) => [...prev, item])
                            datas.push(item);
                        });
                        setBookDatas(datas);
                    console.log(bookDatas)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    React.useEffect(() => {
        setSearchValue(window.location.href.substring(43, window.location.href.length));
        // console.log("changed")   
    }, [temp])

    React.useEffect(() => {
        if (searchValue !== "temp")
            fetchingData();
    }, [searchValue])


    return (
        <div>
            <Navbar searchValue={searchValue} setSearchValue={setSearchValue} fetchingData={fetchingData} />
            <div className='bg-red-500 mt-96'>
                <p className=''>
                    {searchValue}
                </p>
                <CardBook />
            </div>
        </div>
    );
}