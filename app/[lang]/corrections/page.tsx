import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corrections',
  description: 'Corrections and clarifications from Yaalee Post',
};

export default function CorrectionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12" data-testid="page-corrections">
      <h1 className="font-serif font-bold text-4xl md:text-5xl mb-8">Corrections</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-xl text-muted-foreground leading-relaxed">
          We are committed to accuracy and transparency. When we make mistakes, we correct them 
          promptly and clearly.
        </p>

        <div className="bg-card border border-border rounded-lg p-6 mt-8">
          <p className="text-muted-foreground text-center">
            No corrections to display at this time.
          </p>
        </div>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Report an Error</h2>
        <p>
          If you believe you have found a factual error in our coverage, please contact us 
          through our <a href="/contact" className="text-primary hover:underline">contact page</a> 
          with details about the error and the correct information.
        </p>

        <p>
          All correction requests are reviewed by our editorial team. We aim to respond within 
          24 hours and publish corrections as soon as they are verified.
        </p>
      </div>
    </div>
  );
}
