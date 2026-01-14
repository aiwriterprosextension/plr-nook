import founderPhoto from "@/assets/founder-photo.jpg";

export function FounderStory() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
              Our Mission
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Column */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={founderPhoto}
                  alt="John Lawrence - Creator of PLR Organizer Pro"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6 rounded-b-2xl">
                <p className="text-primary-foreground font-bold text-xl">John Lawrence</p>
                <p className="text-primary-foreground/80 text-sm">Creator, PLR Organizer Pro</p>
              </div>
            </div>

            {/* Story Column */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                Here's Why I Built This
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg font-medium text-foreground">
                  I know the struggle because I lived it.
                </p>
                
                <p>
                  After years of buying PLR products, my computer was a mess. Thousands of files 
                  scattered across dozens of folders. Duplicates and triplicates I didn't even 
                  know I had. Every time I needed content, I'd spend hours searching—or worse, 
                  buy something I already owned.
                </p>
                
                <p className="font-semibold text-foreground">
                  Sound familiar?
                </p>
                
                <p>
                  I built PLR Organizer Pro to solve my own problem. One app that scans everything, 
                  finds every PLR package, and organizes them by niche and subniche. No more chaos. 
                  No more wasted money. No more forgotten content collecting digital dust.
                </p>
                
                <p>
                  Now I spend minutes finding exactly what I need instead of hours searching. 
                  And I haven't accidentally repurchased a single PLR package since.
                </p>
                
                <p className="text-lg font-medium text-foreground">
                  This tool changed how I work—and I know it can do the same for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
