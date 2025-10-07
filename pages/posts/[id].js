// setup standard page layout
import Layout from '../../components/layout';

//get post data and markers
import { getPostData, getAllPostIds } from '../../lib/posts-firebase';
// Add this import
// you can use head
import Head from 'next/head';
// you will be able to use tyhe date component
import Date from '../../components/date';
// css for your page
import utilStyles from '../styles/utils.module.css';
//display post data
import { db } from '../../lib/firebase';



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
    const paths = await getAllPostIds();
    console.log(paths);
    return {
        paths,
        fallback: false
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
