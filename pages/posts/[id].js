// setup standard page layout
import Layout from '../../components/layout';

//get post data and markers
import { getPostData } from '../../lib/posts-json';
// Add this import
// you can use head
import Head from 'next/head';
// you will be able to use tyhe date component
import Date from '../../components/date';
// css for your page
import utilStyles from '../styles/utils.module.css';
//display post data
export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.background} >
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}
// allows for page routing
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return
    [
        {
            params: {
                // Statically Generates /posts/a/b/c
                id: ['a', 'b', 'c'],
            },
        },
        //...
    ];
    {
        paths,
            fallback.false
    }
}
//pull data from the sever when needed
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
export async function getAllPostIds() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('..');
    const posts = await res.json();
    return posts.map((post) => {
        return {
            params: {
                id: post.id,
            },
        };
    });
}