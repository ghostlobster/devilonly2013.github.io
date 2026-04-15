import { GitHubPreview } from "@/components/GitHubPreview";
import Link from "next/link";
import { TypewriterEffect } from "@/components/TypewriterEffect";

export default function Projects() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl title-text inline-block">Projects_DB</h1>
        <Link href="/" className="text-sm text-primary hover:underline border border-primary px-2 py-1 bg-card/50">
          [ cd ~ ]
        </Link>
      </div>
      <p className="mb-8 h-6"><TypewriterEffect text="Initializing connection to external repositories..." speed={30} /></p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Placeholder Projects - using the existing GitHubPreview component */}
        <div className="relative group p-[1px] bg-gradient-to-b from-primary/50 to-transparent hover:from-primary transition-all duration-500">
          <div className="bg-background h-full p-6">
            <h2 className="text-xl font-bold mb-2 text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] transition-all">Project Alpha</h2>
            <div className="text-xs font-mono text-muted-foreground mb-4 border-b border-primary/20 pb-2">STATUS: ONLINE | TYPE: FULLSTACK</div>
            <p className="mb-4 text-sm text-foreground/80">A high-performance web application utilizing modern edge computing. Demonstrates complex state management and real-time updates.</p>
            <GitHubPreview repo="vercel/next.js" />
          </div>
        </div>

        <div className="relative group p-[1px] bg-gradient-to-b from-primary/50 to-transparent hover:from-primary transition-all duration-500">
          <div className="bg-background h-full p-6">
            <h2 className="text-xl font-bold mb-2 text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] transition-all">Project Beta</h2>
            <div className="text-xs font-mono text-muted-foreground mb-4 border-b border-primary/20 pb-2">STATUS: ARCHIVED | TYPE: CLI_TOOL</div>
            <p className="mb-4 text-sm text-foreground/80">Command-line interface for automating redundant tasks. Built with Rust for maximum performance and memory safety.</p>
            <GitHubPreview repo="facebook/react" />
          </div>
        </div>

        <div className="relative group p-[1px] bg-gradient-to-b from-primary/50 to-transparent hover:from-primary transition-all duration-500 md:col-span-2">
          <div className="bg-background h-full p-6">
            <h2 className="text-xl font-bold mb-2 text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,255,0,0.8)] transition-all">Project Gamma</h2>
            <div className="text-xs font-mono text-muted-foreground mb-4 border-b border-primary/20 pb-2">STATUS: IN_PROGRESS | TYPE: ML_PIPELINE</div>
            <p className="mb-4 text-sm text-foreground/80">Data processing pipeline for analyzing massive datasets using distributed computing. Features an interactive dashboard for visualization.</p>
            <GitHubPreview repo="torvalds/linux" />
          </div>
        </div>
      </div>
    </div>
  );
}
