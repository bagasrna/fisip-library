import CardBook from "@/Components/CardBook";
import CustomFooter from "@/Components/CustomFooter";
import Navbar from "@/Components/Navbar";

export default function LandingPage({name}) {
    let userName = name;

    return (
        <div>
            <Navbar userName={userName}/>
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
                <CardBook/>
                <CardBook/>
                <CardBook/>
                <CardBook/>
                <CardBook/>
            </main>
            <CustomFooter/>
        </div>
    );
}