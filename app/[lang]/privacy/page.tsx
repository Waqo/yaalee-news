import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Yaalee Post privacy policy',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12" data-testid="page-privacy">
      <h1 className="font-serif font-bold text-4xl md:text-5xl mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground text-sm">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Information We Collect</h2>
        <p>
          Yaalee Post collects minimal information necessary to provide and improve our services. 
          This includes:
        </p>
        <ul>
          <li>Analytics data (page views, browsing patterns) via Vercel Analytics</li>
          <li>Cookie preferences and consent</li>
          <li>Information you voluntarily provide (newsletter subscriptions, contact forms)</li>
        </ul>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">How We Use Your Information</h2>
        <p>
          We use collected information to:
        </p>
        <ul>
          <li>Improve our content and user experience</li>
          <li>Send newsletters and updates (with your consent)</li>
          <li>Analyze traffic patterns and popular content</li>
          <li>Detect and prevent fraud or abuse</li>
        </ul>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Third-Party Services</h2>
        <p>
          We use the following third-party services:
        </p>
        <ul>
          <li><strong>Vercel Analytics:</strong> Website performance and usage analytics</li>
          <li><strong>Sanity CMS:</strong> Content management</li>
          <li><strong>Supabase:</strong> Database and authentication</li>
        </ul>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
        </ul>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Contact</h2>
        <p>
          For privacy-related questions, contact us at{' '}
          <a href="mailto:privacy@yaaleepost.com" className="text-primary hover:underline">
            privacy@yaaleepost.com
          </a>
        </p>
      </div>
    </div>
  );
}
