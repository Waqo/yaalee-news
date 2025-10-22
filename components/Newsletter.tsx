'use client';

export function Newsletter() {
  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-bold text-2xl md:text-3xl mb-3">
          Subscribe Now for Real-time Updates on the Latest Stories!
        </h2>
        <p className="text-primary-foreground/90 mb-6">
          Stay instantly connected with breaking stories and live updates.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-primary font-semibold rounded hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Sign Up Now
          </button>
        </form>
        
        <p className="text-xs text-primary-foreground/80 mt-3">
          I have read and agree to the terms & conditions
        </p>
      </div>
    </div>
  );
}

