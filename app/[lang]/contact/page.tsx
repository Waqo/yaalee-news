import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Yaalee Post',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12" data-testid="page-contact">
      <h1 className="font-serif font-bold text-4xl md:text-5xl mb-8">Contact Us</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-xl text-muted-foreground leading-relaxed">
          We welcome your feedback, story tips, and inquiries.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-serif font-bold text-2xl mb-4">News Tips</h3>
            <p className="text-muted-foreground mb-4">
              Have a story idea or news tip?
            </p>
            <p className="font-medium">
              Email: <a href="mailto:tips@yaaleepost.com" className="text-primary hover:underline">
                tips@yaaleepost.com
              </a>
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-serif font-bold text-2xl mb-4">General Inquiries</h3>
            <p className="text-muted-foreground mb-4">
              Questions about our coverage or operations?
            </p>
            <p className="font-medium">
              Email: <a href="mailto:info@yaaleepost.com" className="text-primary hover:underline">
                info@yaaleepost.com
              </a>
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-serif font-bold text-2xl mb-4">Press Inquiries</h3>
            <p className="text-muted-foreground mb-4">
              Media requests and interviews
            </p>
            <p className="font-medium">
              Email: <a href="mailto:press@yaaleepost.com" className="text-primary hover:underline">
                press@yaaleepost.com
              </a>
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-serif font-bold text-2xl mb-4">Corrections</h3>
            <p className="text-muted-foreground mb-4">
              Report an error in our coverage
            </p>
            <p className="font-medium">
              Email: <a href="mailto:corrections@yaaleepost.com" className="text-primary hover:underline">
                corrections@yaaleepost.com
              </a>
            </p>
          </div>
        </div>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Social Media</h2>
        <p>
          Follow us for the latest updates and engage with our stories:
        </p>
        <ul className="space-y-2">
          <li>Twitter: <a href="https://twitter.com/yaaleepost" className="text-primary hover:underline">@yaaleepost</a></li>
          <li>Facebook: <a href="https://facebook.com/yaaleepost" className="text-primary hover:underline">@yaaleepost</a></li>
        </ul>
      </div>
    </div>
  );
}
