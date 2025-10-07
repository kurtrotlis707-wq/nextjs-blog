// Import Next.js Head component for managing document head elements
import Head from 'next/head';
// Import the custom Layout component and siteTitle constant
import Layout, { siteTitle } from '../components/layout';
// Import utility styles for consistent styling
import utilStyles from '../pages/styles/utils.module.css';
// Import data from posts
import { getSortedPostsData } from '../lib/posts-firebase';
//Abillity to link pages
import Link from 'next/link';
//ability to call date component
import Date from '../components/date';


//display post info
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}
/**
 * Home Component
 * A React functional component that renders the main home page
 * This is the default export for the root route ('/') in Next.js
 */

export default function Home({ allPostsData }) {
  return (
    // Use the Layout component with 'home' prop for home page styling
    <Layout home>
      {/* Head component allows us to modify the document head for this specific page */}
      <Head>
        {/* Set the page title in the browser tab using the siteTitle constant */}
        <title>{siteTitle}</title>
      </Head>

      {/* Main content section with utility styling */}
      <section className={utilStyles.headingMd}>
        {/* Personal introduction paragraph */}
        <p>[My name is Kurt. ]</p>

        {/* Information paragraph with link to Next.js tutorial */}
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.background}  ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}