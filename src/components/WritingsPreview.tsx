import { ChevronRight, Clock } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { CardSpotlight } from "./ui/card-spotlight";
import Button from "./Button";
import { BLOG_POSTS } from "../data";

export default function WritingsPreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-white mb-2">
          Writings
        </h2>
        <p className="text-neutral-400 font-mono text-sm md:text-base">
          Writing about web & blockchain.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.slice(0, 2).map((post) => (
          <a
            key={post.id}
            href={`/blog/${post.id}`}
            className="block no-underline"
          >
            <CardSpotlight
              radius={400}
              color="rgba(34, 211, 238, 0.06)"
              className="cursor-pointer group bg-neutral-900/30 border-white/5 hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 p-4">
                <div className="w-full md:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-magenta-400 mb-2">
                    <Clock size={12} />
                    {post.date}
                  </div>
                  <h3 className="text-lg font-bold text-white font-orbitron mb-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    Read More{" "}
                    <ChevronRight
                      size={14}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </CardSpotlight>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="/blog">
          <Button variant="secondary">View All Posts</Button>
        </a>
      </div>
    </section>
  );
}
