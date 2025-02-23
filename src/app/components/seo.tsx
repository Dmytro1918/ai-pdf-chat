import Head from 'next/head';

interface SeoProps  {
    title: string,
    description: string,
    image: string, 
    url?: string, //for future
    schemaMarkup?: Record<string, unknown>
}
const Seo:React.FC<SeoProps> = ({ title, description, image, url, schemaMarkup }) => {
  return (
    <Head>
      {/* Standard meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="nextjs, seo, web development" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph meta tags for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Schema Markup */}
      {schemaMarkup && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default Seo;
