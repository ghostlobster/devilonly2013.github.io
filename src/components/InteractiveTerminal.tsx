"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface CommandRecord {
  input: string;
  output: React.ReactNode;
}

export function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandRecord[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div>
            Available commands:<br />
            - <strong>help</strong>: Show this message<br />
            - <strong>about</strong>: Display system info<br />
            - <strong>cd projects</strong>: Navigate to projects directory<br />
            - <strong>cd ~</strong>: Return to home directory<br />
            - <strong>clear</strong>: Clear terminal history<br />
            - <strong>exit</strong>: Close terminal
          </div>
        );
        break;
      case "about":
        output = "System version 1.0.0. Operating normally.";
        break;
      case "cd projects":
      case "cd ./projects":
        output = "Navigating to /projects...";
        router.push("/projects");
        setIsOpen(false);
        break;
      case "cd ~":
      case "cd /":
        output = "Navigating to home...";
        router.push("/");
        setIsOpen(false);
        break;
      case "clear":
        setHistory([]);
        return; // Don't add clear command to history
      case "exit":
        setIsOpen(false);
        return;
      case "":
        break;
      default:
        output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { input: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-background border-2 border-primary text-primary px-4 py-2 font-mono text-sm hover:bg-primary hover:text-background transition-colors shadow-[0_0_10px_rgba(0,255,0,0.5)] z-50"
      >
        &gt;_ TERMINAL
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-[90vw] md:w-[500px] h-[400px] bg-black/90 border border-primary font-mono text-primary z-50 flex flex-col shadow-[0_0_20px_rgba(0,255,0,0.3)] backdrop-blur-sm">
      <div className="flex justify-between items-center border-b border-primary/50 px-2 py-1 bg-primary/10">
        <span className="text-xs">guest@system:~</span>
        <button onClick={() => setIsOpen(false)} className="text-primary hover:text-red-500 font-bold">
          [X]
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 text-sm scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
        <div className="mb-4 text-primary/70">
          Welcome to System Terminal v1.0.0<br/>
          Type &apos;help&apos; for a list of commands.
        </div>

        {history.map((record, i) => (
          <div key={i} className="mb-2">
            <div className="flex">
              <span className="mr-2 opacity-70">&gt;</span>
              <span>{record.input}</span>
            </div>
            {record.output && <div className="ml-4 mt-1 text-primary/90">{record.output}</div>}
          </div>
        ))}

        <div className="flex items-center mt-2">
          <span className="mr-2 opacity-70">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-primary"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
