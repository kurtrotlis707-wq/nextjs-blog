// Import Next.js components for enhanced functionality
import Head from 'next/head';        // Component for managing document head elements
import Link from 'next/link';        // Component for client-side navigation
import Layout from '../../components/layout';  // Custom layout component
import Script from 'next/script';    // Component for loading external scripts

/**
 * FirstPost Component
 * A React functional component that renders the first blog post page
 * This component demonstrates Next.js features like Head management and Script loading
 */
export default function FirstPost() {
    return (
        <>
            {/* Head component allows us to modify the document head for this specific page */}
            <Head>
                <title>First Post</title>  {/* Sets the page title in the browser tab */}
            </Head>

            {/* Script component loads external JavaScript with optimization */}
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"  // Facebook SDK URL
                strategy="lazyOnload"  // Load script after page becomes interactive
                onLoad={() =>
                    // Callback function executed when script loads successfully
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

            {/* Main content of the blog post page */}
            <h1>First Post</h1>  {/* Primary heading for the post */}

            {/* Navigation link back to home page */}
            <h2>
                <Link href="/">← Back to home</Link>  {/* Client-side navigation to home */}
            </h2>
        </>
    );
}