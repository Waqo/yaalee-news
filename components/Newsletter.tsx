'use client';

export function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter subscription logic will be implemented
  };

  return (
    <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12" aria-label="Newsletter Subscription">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-large-heading mb-3">
          Subscribe Now for Real-time Updates on the Latest Stories!
        </h2>
        <p className="text-primary-foreground/90 mb-6 text-base md:text-lg leading-relaxed">
          Stay instantly connected with breaking stories and live updates.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            required
            aria-required="true"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-primary font-semibold rounded hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
          >
            Sign Up Now
          </button>
        </form>
        
        <p className="text-xs text-primary-foreground/80 mt-3">
          I have read and agree to the terms & conditions
        </p>
      </div>
    </section>
  );
}

