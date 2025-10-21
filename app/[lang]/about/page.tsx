import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Yaalee Post, Ethiopia\'s trusted source for news and analysis',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12" data-testid="page-about">
      <h1 className="font-serif font-bold text-4xl md:text-5xl mb-8">About Yaalee Post</h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <p className="text-xl text-muted-foreground leading-relaxed">
          Yaalee Post is Ethiopia's trusted source for independent journalism, in-depth analysis, 
          and compelling storytelling.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Our Mission</h2>
        <p>
          We are committed to delivering accurate, balanced, and insightful news coverage that 
          serves the Ethiopian people and the global diaspora. Our multilingual platform ensures 
          that critical stories reach audiences in English, Oromo, and Amharic.
        </p>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Our Values</h2>
        <ul className="space-y-3">
          <li><strong>Accuracy:</strong> We verify facts rigorously before publication</li>
          <li><strong>Independence:</strong> We report without political or commercial influence</li>
          <li><strong>Diversity:</strong> We amplify voices from all corners of Ethiopian society</li>
          <li><strong>Transparency:</strong> We openly correct errors and explain our processes</li>
        </ul>

        <h2 className="font-serif font-bold text-3xl mt-12 mb-4">Contact Us</h2>
        <p>
          For news tips, story ideas, or press inquiries, please reach out through our{' '}
          <a href="/contact" className="text-primary hover:underline">contact page</a>.
        </p>
      </div>
    </div>
  );
}
