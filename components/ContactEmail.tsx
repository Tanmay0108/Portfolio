"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

export const EMAIL_ADDRESS = "tanmaypotnurwar8@gmail.com";
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;

export function ContactEmailActions() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL_ADDRESS;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        className="btn btn-primary"
        href={GMAIL_COMPOSE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Tanmay via Gmail (opens in new tab)"
      >
        <Mail size={16} />
        <span>Email me</span>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className="btn"
        aria-label="Copy email address to clipboard"
      >
        {copied ? (
          <>
            <Check size={16} className="text-emerald-400" />
            <span className="text-emerald-400">Email copied!</span>
          </>
        ) : (
          <>
            <Copy size={16} />
            <span>Copy email</span>
          </>
        )}
      </button>
    </div>
  );
}

export function FooterEmailLink() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="inline-flex items-center gap-2">
      <a
        href={GMAIL_COMPOSE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="muted hover:text-[var(--accent)] transition-colors"
        aria-label="Email Tanmay via Gmail (opens in new tab)"
      >
        Email
      </a>
      <button
        type="button"
        onClick={handleCopy}
        title="Copy email to clipboard"
        aria-label="Copy email address to clipboard"
        className="text-xs muted hover:text-[var(--accent)] transition-colors p-0.5"
      >
        {copied ? (
          <span className="text-emerald-400 text-[0.72rem] font-medium">Copied!</span>
        ) : (
          <Copy size={13} />
        )}
      </button>
    </div>
  );
}
