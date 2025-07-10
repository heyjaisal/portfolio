export default function Footer() {
  return (
    <footer className="w-full h-full bg-black text-white font-inter relative z-10">
      <div className="w-full h-full flex flex-col justify-end px-6 sm:px-16 md:px-20 pb-20">
        {/* Big Heading */}
        <h2 className="text-[clamp(2rem,6vw,4.5rem)] font-medium text-neutral-400 leading-tight">
          Let’s <span className="text-white">create together</span>
        </h2>

        {/* Bottom Links & Credit */}
        <div className="mt-6 flex justify-between items-center border-t border-neutral-700 pt-6 text-xs text-neutral-400 flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap">
            <a href="#" className="hover:underline">TWITTER ↗</a>
            <a href="#" className="hover:underline">BEHANCE ↗</a>
            <a href="#" className="hover:underline">LINKEDIN ↗</a>
          </div>
          <p className="text-neutral-500">DESIGNED & BUILT WITH 🟡 BY ME</p>
        </div>
      </div>
    </footer>
  );
}
