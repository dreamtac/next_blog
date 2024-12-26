import NavBar from '@/components/nav_bar';
import First from '../../posts/coding/first/page.mdx';

export default function BlogHome() {
    return (
        <div>
            <NavBar categoryParam="" />
            <First />
        </div>
    );
    // return redirect('/blog/all');
}
