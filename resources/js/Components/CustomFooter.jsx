import { InertiaLink } from "@inertiajs/inertia-react";
import Button from "./Button";
import Input from "./Input";

export default function CustomFooter(){
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <footer className="flex p-10 justify-around flex-col md:flex-row" style={{backgroundColor: "#E9E4E5"}}>
            <form onSubmit={handleSubmit}>
                <p className="font-bold mb-4">Ada masukan untuk kami?</p>
                <Input type="text" placeholder="Nama" className="mb-2 w-full" required/>
                <Input type="email" placeholder="E-mail" className="mb-2 w-full" required/>
                <Input type="text" placeholder="Feedback" className="mb-4 w-full" required/>
                <Button type="submit">Kirim</Button>
            </form>
            <div className="mt-14 md:mt-0">
                <p className="font-bold mb-4">Peminjaman</p>
                <div className="flex flex-col">
                <InertiaLink className="mb-2">Perpustakaan Penyedia</InertiaLink>
                <InertiaLink className="mb-2">Daftar Buku</InertiaLink>
                <InertiaLink className="mb-2">Peminjaman</InertiaLink>
                <InertiaLink className="mb-2">Pengembalian</InertiaLink>
                </div>
            </div>
            <div className="flex flex-col md:items-center md:mt-0 mt-14">
                <p className="font-bold mb-4">Hubungi Kami</p>
                <div className="flex items-center">
                    <InertiaLink className="mr-2">
                        <img src="/images/facebook_logo.svg" width="24"/>
                    </InertiaLink>
                    <InertiaLink className="mr-2">
                        <img src="/images/instagram_logo.svg" width="24"/>
                    </InertiaLink>
                    <InertiaLink className="mr-2">
                        <img src="/images/twitter_logo.svg" width="24"/>
                    </InertiaLink>
                </div>
                <InertiaLink>
                    <img src="/images/logo_horizontal.svg" width="" className="mt-4 -ml-1"/>
                </InertiaLink>
            </div>
            <div className=" md:mt-0 mt-14">
                <p className="font-bold mb-4">Lainnya</p>
                <div className="flex flex-col">
                    <InertiaLink className="mb-2">Syarat dan ketentuan</InertiaLink>
                    <InertiaLink className="mb-2">Kebijakan & Privasi</InertiaLink>
                    <InertiaLink className="mb-2">Bantuan</InertiaLink>
                </div>
            </div>
        </footer>
    );
}