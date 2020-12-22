import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Hi, I'm Markus. I may not be a stereotype programmer (not
					the biggest nerd, lol), but I love me some good code!
				</p>
				<Link href="/posts/first-post">
					<a>Check out my first Post</a>
				</Link>
			</section>
		</Layout>
	);
}