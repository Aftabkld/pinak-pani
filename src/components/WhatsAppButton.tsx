export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20Pinak%20Pani%20Enterprises%2C%20I%20want%20to%20know%20more%20about%20your%20spices."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(0,63,92,0.28)] transition hover:-translate-y-1 hover:bg-[#1ebe5d]"
      aria-label="Chat on WhatsApp"
    >
      <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.04 3.2A12.75 12.75 0 0 0 5.18 22.6L3.6 28.8l6.36-1.5A12.76 12.76 0 1 0 16.04 3.2Zm0 23.2c-2.08 0-4.02-.6-5.66-1.66l-.4-.25-3.76.9 1-3.65-.27-.42a10.43 10.43 0 1 1 9.1 5.08Zm5.92-7.8c-.32-.16-1.9-.94-2.2-1.04-.3-.12-.52-.16-.74.16-.22.32-.84 1.04-1.04 1.26-.18.22-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.96-.86-1.6-1.92-1.78-2.24-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.2.22-.32.32-.54.1-.22.06-.4-.02-.56-.08-.16-.74-1.78-1.02-2.44-.26-.64-.54-.56-.74-.56h-.62c-.22 0-.56.08-.86.4-.3.32-1.14 1.12-1.14 2.72 0 1.6 1.16 3.14 1.32 3.36.16.22 2.3 3.5 5.56 4.9.78.34 1.38.54 1.86.7.78.24 1.48.2 2.04.12.62-.1 1.9-.78 2.18-1.54.26-.76.26-1.4.18-1.54-.08-.14-.3-.22-.62-.38Z" />
      </svg>
    </a>
  );
}
