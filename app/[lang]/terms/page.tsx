import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Yaalee Post terms of service',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12" data-testid="page-terms">
      <h1 className="font-serif font-bold text-4xl md:text-5xl mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-muted-foreground text-sm">Last updated: {new Date().toLocaleDateString()}</p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Acceptance of Terms</h2>
        <p>
          By accessing and using Yaalee Post, you accept and agree to be bound by these Terms of Service.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Content Usage</h2>
        <p>
          All content on Yaalee Post is protected by copyright and other intellectual property rights. 
          You may:
        </p>
        <ul>
          <li>Read and share articles via social media</li>
          <li>Quote brief excerpts with proper attribution</li>
          <li>Print articles for personal use</li>
        </ul>
        <p>
          You may not:
        </p>
        <ul>
          <li>Republish our content without permission</li>
          <li>Use our content for commercial purposes without a license</li>
          <li>Remove attribution or copyright notices</li>
        </ul>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">User Conduct</h2>
        <p>
          When interacting with our platform, you agree not to:
        </p>
        <ul>
          <li>Post offensive, defamatory, or illegal content</li>
          <li>Harass or threaten other users</li>
          <li>Attempt to compromise our systems or security</li>
          <li>Use automated tools to scrape or copy our content</li>
        </ul>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Disclaimer</h2>
        <p>
          Yaalee Post provides content "as is" without warranties of any kind. We strive for accuracy 
          but cannot guarantee that all information is error-free or current.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Limitation of Liability</h2>
        <p>
          Yaalee Post shall not be liable for any indirect, incidental, or consequential damages 
          arising from your use of our website.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Changes to Terms</h2>
        <p>
          We may update these terms periodically. Continued use of our website after changes 
          constitutes acceptance of the new terms.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Contact</h2>
        <p>
          Questions about these terms? Contact us at{' '}
          <a href="mailto:legal@yaaleepost.com" className="text-primary hover:underline">
            legal@yaaleepost.com
          </a>
        </p>
      </div>
    </div>
  );
}
