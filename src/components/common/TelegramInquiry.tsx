// Shared floating "텔레그램 문의" inquiry button.
// Reads the site's telegram URL from sites.ts; renders nothing if unset.
import { SITES } from "@/lib/sites";

interface TelegramInquiryProps {
  siteId: string;
  label?: string;
}

export function TelegramInquiry({ siteId, label = "텔레그램 문의" }: TelegramInquiryProps) {
  const href = SITES[siteId]?.telegram;
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#229ED9] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 hover:bg-[#1b8ec2]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M21.94 4.7a1.5 1.5 0 0 0-1.56-.23L3.4 11.05c-1.1.44-1.07 2.02.05 2.41l4.2 1.46 1.6 5.04a1 1 0 0 0 1.66.43l2.36-2.24 4.3 3.16a1.5 1.5 0 0 0 2.36-.95l2.56-14.2a1.5 1.5 0 0 0-.95-1.46Zm-3.8 3.2-7.1 6.43a1 1 0 0 0-.3.55l-.32 2.07-1.2-3.77 8.97-5.45c.36-.22.72.26.41.55l-.15.13Z" />
      </svg>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
