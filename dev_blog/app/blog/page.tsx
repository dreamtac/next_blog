// import NavBar from '@/components/nav_bar';
import { redirect } from 'next/navigation';
export default function BlogHome() {
    return redirect('/blog/All');
    // <div className="flex flex-col">
    //     <NavBar />
    //     Blog Home
    // </div>
}
