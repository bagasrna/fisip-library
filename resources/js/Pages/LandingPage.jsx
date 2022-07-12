import Navbar from "@/Components/Navbar";

export default function LandingPage(){
    return(
        <div>
            <Navbar/>
            <div className="jumbotron p-10 flex items-center justify-between md:flex-row flex-col-reverse mt-24 py-20" style={{background: 'linear-gradient(180deg, #E9E4E5 0%, #F8BC61 100%)'}}>
                <div className="jumbotron-content w-2/5">
                    <h1 className="text-5xl font-bold">Welcome to LibNow</h1>
                    <p className="mt-5">Layanan pinjam buku online yang menjamin ketersediaan buku di perpustakaan tujuan</p>
                </div>
                <div className="jumbotron-image w-2/5 flex justify-center mb-10 md:mb-0">
                    <img src="/images/jumbotron-image-only.svg" className="w-96 md:absolute top-40 right-10 lg:right-40 -scale-x-100"/>
                </div>
            </div>
        </div>
    );
}