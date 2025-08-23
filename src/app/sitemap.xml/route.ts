import { NextResponse } from 'next/server';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET() {
  try {
    const baseUrl = 'https://ldcounsels.com'; // Update this to your actual domain
    
    // Define static pages with their priorities and change frequencies
    const staticPages: Array<{ url: string; priority: string; changefreq: string; lastmod?: string }> = [
      { url: '/', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.9', changefreq: 'weekly' },
      { url: '/contact', priority: '0.9', changefreq: 'monthly' },
      { url: '/team', priority: '0.8', changefreq: 'weekly' },
      { url: '/practices-areas', priority: '0.9', changefreq: 'weekly' },
      { url: '/resources', priority: '0.9', changefreq: 'daily' },
      { url: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
      { url: '/terms-&-condition', priority: '0.5', changefreq: 'yearly' },
      { url: '/thank-you', priority: '0.3', changefreq: 'yearly' },
      
      // Service pages
      { url: '/arbitration-mediation', priority: '0.8', changefreq: 'monthly' },
      { url: '/consumer-disputes-protection', priority: '0.8', changefreq: 'monthly' },
      { url: '/conveyancing-wills', priority: '0.8', changefreq: 'monthly' },
      { url: '/corporate-commercial-advisory', priority: '0.8', changefreq: 'monthly' },
      { url: '/employment-labour-service-law', priority: '0.8', changefreq: 'monthly' },
      { url: '/family-law-matrimonial-disputes', priority: '0.8', changefreq: 'monthly' },
      { url: '/insolvency-bankruptcy-ibc-matters', priority: '0.8', changefreq: 'monthly' },
      { url: '/litigation-dispute-resolution', priority: '0.8', changefreq: 'monthly' },
      { url: '/media-entertainment-intellectual-property', priority: '0.8', changefreq: 'monthly' },
      { url: '/ngo-non-profit-advisory', priority: '0.8', changefreq: 'monthly' },
      { url: '/public-interest-constitutional-matters', priority: '0.8', changefreq: 'monthly' },
      { url: '/startup-legal-solutions', priority: '0.8', changefreq: 'monthly' },
    ];

    // Fetch dynamic blog posts from Firebase
    let blogPages: Array<{ url: string; priority: string; changefreq: string; lastmod?: string }> = [];
    
    try {
      const blogsQuery = query(collection(db, 'blogs'));
      const querySnapshot = await getDocs(blogsQuery);
      
      blogPages = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const blogUrl = `/resources/${data.slug}`;
        
        // Format lastmod date if available
        let lastmod = undefined;
        if (data.updated || data.created) {
          const date = new Date(data.updated || data.created);
          lastmod = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD
        }
        
        return {
          url: blogUrl,
          priority: '0.7',
          changefreq: 'weekly',
          lastmod
        };
      });
    } catch (error) {
      console.error('Error fetching blogs for sitemap:', error);
      // Continue with static pages even if blog fetching fails
    }

    // Combine all pages
    const allPages = [...staticPages, ...blogPages];

    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url.replace(/&/g, '&amp;')}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>${page.lastmod ? `
    <lastmod>${page.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

    // Return XML response with proper headers
    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Return error response
    return new NextResponse('Error generating sitemap', {
      status: 500,
    });
  }
}
