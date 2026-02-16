import { useState } from "react";
import { motion } from "motion/react";
import { Search, ChevronRight, Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { CardSpotlight } from "./ui/card-spotlight";
import { BLOG_POSTS } from "../data";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)));

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6">
          Blog
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Technical articles, tutorials, and development notes.
        </p>
      </div>

      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-neutral-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-4 border border-white/10 rounded-lg leading-5 bg-neutral-900 text-white placeholder-neutral-500 focus:outline-none focus:bg-neutral-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 sm:text-sm transition-all"
            placeholder="Search posts by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 text-xs font-mono rounded-full border transition-all ${
              selectedTag === null
                ? "bg-cyan-950 text-cyan-400 border-cyan-500"
                : "bg-neutral-900 text-neutral-400 border-white/10 hover:border-white/30"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                setSelectedTag(tag === selectedTag ? null : tag)
              }
              className={`px-3 py-1 text-xs font-mono rounded-full border transition-all ${
                selectedTag === tag
                  ? "bg-cyan-950 text-cyan-400 border-cyan-500"
                  : "bg-neutral-900 text-neutral-400 border-white/10 hover:border-white/30"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <a
                href={`/blog/${post.id}`}
                className="block no-underline h-full"
              >
                <CardSpotlight
                  radius={300}
                  color="rgba(34, 211, 238, 0.06)"
                  className="cursor-pointer group bg-neutral-900 border-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:border-cyan-500/20 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden relative rounded-t-xl">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-xs font-mono text-cyan-400 border border-cyan-500/30">
                      {post.tags[0]}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white font-orbitron mb-3 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-magenta-500 text-xs font-bold uppercase tracking-wider group-hover:underline">
                        Read Article
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-magenta-500 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </CardSpotlight>
              </a>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-neutral-500 font-mono">
            No posts found matching your query.
          </div>
        )}
      </div>
    </div>
  );
}
