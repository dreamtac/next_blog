import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function HeaderComponent() {
    return (
        <div className="flex flex-row max-w-screen-lg w-screen bg-white items-center justify-between px-4">
            <Link href={'/'}>
                <Image src={logo} alt="logo"></Image>
            </Link>
            <div>
                <form action="" className="flex flex-row gap-4">
                    <input type="text" placeholder="Search" className="border border-black text-black px-2" />
                    <button className="border border-black text-black">검색</button>
                </form>
            </div>
        </div>
    );
}
