import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { TypewriterEffect } from "@/components/TypewriterEffect";

export default function Home() {
  const posts = getPosts();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl title-text inline-block">Home Directory</h1>
        <Link href="/projects" className="text-sm text-primary hover:underline border border-primary px-2 py-1 bg-card/50">
          [ ls ./projects ]
        </Link>
      </div>
      <p className="mb-8 h-6"><TypewriterEffect text="Welcome to the system. Documenting learned protocols and interests." /></p>

      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-l-2 md:border-l-4 border-primary pl-4 md:pl-6 bg-card/50 p-4 transition-all hover:bg-card">
            <Link href={`/posts/${post.slug}`} className="block group">
              <div className="text-xl font-bold mb-2 text-primary group-hover:underline">{post.title}</div>
              <div className="text-sm text-muted-foreground mb-4 font-mono tracking-wider">TIMESTAMP: {post.date}</div>
              <p className="text-foreground/90">{post.description}</p>
            </Link>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-muted-foreground font-mono">No files found in directory.</div>
      )}
    </div>
  );
}
