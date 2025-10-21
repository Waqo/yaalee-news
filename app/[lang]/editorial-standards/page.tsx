import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Standards',
  description: 'Yaalee Post editorial standards and journalistic principles',
};

export default function EditorialStandardsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12" data-testid="page-editorial-standards">
      <h1 className="font-serif font-bold text-4xl md:text-5xl mb-8">Editorial Standards</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-xl text-muted-foreground leading-relaxed">
          Our commitment to excellence in journalism guides every story we publish.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Accuracy & Verification</h2>
        <p>
          Every fact in our reporting is verified through multiple independent sources. We clearly 
          distinguish between news and opinion. When we make errors, we correct them promptly and 
          transparently.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Independence</h2>
        <p>
          Yaalee Post maintains editorial independence from political parties, governments, and 
          commercial interests. Our journalists are free to report without fear or favor.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Fairness & Balance</h2>
        <p>
          We strive to present multiple perspectives on contentious issues. All parties affected 
          by our reporting are given the opportunity to respond.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Source Protection</h2>
        <p>
          We protect the identity of confidential sources who provide information in the public 
          interest, while being transparent about our sourcing methods.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Conflicts of Interest</h2>
        <p>
          Our journalists disclose any potential conflicts of interest and recuse themselves 
          from coverage where necessary.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Corrections Policy</h2>
        <p>
          We acknowledge and correct errors promptly. Significant corrections are published 
          on our <a href="/corrections" className="text-primary hover:underline">corrections page</a> 
          and appended to the original article.
        </p>
      </div>
    </div>
  );
}
