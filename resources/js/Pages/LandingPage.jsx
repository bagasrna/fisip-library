import CardBook from "@/Components/CardBook";
import CustomFooter from "@/Components/CustomFooter";
import Navbar from "@/Components/Navbar";

export default function LandingPage({ name, books, categories }) {
    let userName = name;
    console.log(books);

    const handleCategory = (obj) => {
        for (let i = 0; i < categories.length; i++) {
            if (obj.category_id === categories[i].id) {
                return categories[i].name;
            }
        }
    }

    const handleClick = (obj) => {
        localStorage.setItem("bookData", JSON.stringify(obj));
    }

    return (
        <div>
            <Navbar userName={userName} />
            <div className="jumbotron p-10 flex items-center justify-between md:flex-row flex-col-reverse mt-24 py-20" style={{ background: 'linear-gradient(180deg, #E9E4E5 0%, #F8BC61 100%)' }}>
                <div className="jumbotron-content w-full md:w-2/5">
                    <h1 className="text-5xl font-bold">Welcome to LibNow</h1>
                    <p className="mt-5" style={{ color: "#BF4242" }}>Layanan pinjam buku online yang menjamin ketersediaan buku di perpustakaan tujuan</p>
                </div>
                <div className="jumbotron-image w-full md:w-2/5 flex justify-center mb-10 md:mb-0">
                    <img src="/images/jumbotron-image-only.svg" className="w-96 md:absolute top-40 right-10 lg:right-40 -scale-x-100" />
                </div>
            </div>
            <main className="px-5 py-20 flex justify-center flex-wrap">
                {
                    books !== undefined ?
                        books.map((book) => {
                            return (
                                <a onClick={() => handleClick(book)} href="/detail" key={book.title} className="m-5 min-w-[25%]">
                                    <CardBook title={book.title} category={handleCategory(book)} author={book.author} />
                                </a>
                            );
                        })
                        : <></>
                }

            </main>
            <CustomFooter />
        </div>
    );
}