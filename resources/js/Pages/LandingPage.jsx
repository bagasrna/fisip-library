import CardBook from "@/Components/CardBook";
import CustomFooter from "@/Components/CustomFooter";
import Navbar from "@/Components/Navbar";
import Pagination from "@/Components/Pagination";
import { Head, InertiaLink } from "@inertiajs/inertia-react";

export default function LandingPage({ name, books }) {
    const handleCategory = (obj) => {
        if (obj.category_id === 1)
            return "Web Programming"
        else if (obj.category_id === 2)
            return "Anime"
        else if (obj.category_id === 3)
            return "Personal"
    }

    const handleClick = (obj) => {
        localStorage.setItem("bookData", JSON.stringify(obj));
    }

    return (
        <div>
            <Head title="Dashboard" />
            <Navbar userName={name} />
            <div className="jumbotron p-10 flex items-center justify-between md:flex-row flex-col-reverse mt-24 py-20" style={{ background: 'linear-gradient(180deg, #E9E4E5 0%, #F8BC61 100%)' }}>
                <div className="jumbotron-content w-full md:w-2/5">
                    <h1 className="text-5xl font-bold">Welcome to LibNow</h1>
                    <p className="mt-5" style={{ color: "#BF4242" }}>Layanan pinjam buku online yang menjamin ketersediaan buku di perpustakaan tujuan</p>
                </div>
                <div className="jumbotron-image w-full md:w-2/5 flex justify-center mb-10 md:mb-0">
                    <img src="/images/jumbotron-image-only.svg" className="w-96 md:absolute top-40 right-10 lg:right-40 -scale-x-100" />
                </div>
            </div>
            <div>
                <p className="ml-10 mt-10 font-italic">Menampilkan <span className="font-bold">{books?.data?.length}</span> dari <span className="font-bold">{books?.total}</span> data</p>
                <main className="px-5 pt-7 pb-10 flex justify-center flex-wrap">
                    {
                        books?.data?.length !== 0 ?
                            books?.data?.map((book) => {
                                return (
                                    <InertiaLink onClick={() => handleClick(book)} href={`/dashboard/${book?.id}`} key={book?.id} className="m-5 lg:min-w-[25%] min-w-full">
                                        <CardBook title={book?.title} category={handleCategory(book)} author={book?.author} />
                                    </InertiaLink>
                                );
                            })
                            : <div>Data Buku Tidak Ditemukan</div>
                    }
                </main>
            </div>
            <div className="w-full justify-center flex mb-10">
                {
                    books.data.length !== 0 ?
                        <Pagination links={books?.links} /> :
                        <></>
                }
            </div>
            <CustomFooter />
        </div>
    );
}