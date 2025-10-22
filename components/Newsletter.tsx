'use client';

export function Newsletter() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
          Subscribe Now for Real-time Updates
        </h2>
        <p className="text-primary-foreground/90 mb-8 text-lg">
          Stay instantly connected with breaking stories and live updates. Get the latest news delivered directly to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-md text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-background text-primary font-semibold rounded-md hover:bg-background/90 transition-colors whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>
        
        <p className="text-xs text-primary-foreground/70 mt-4">
          I have read and agree to the terms & conditions
        </p>
      </div>
    </div>
  );
}

