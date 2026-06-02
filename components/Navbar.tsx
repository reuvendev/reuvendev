// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-black/50 backdrop-blur-sm border-b border-white/5">
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono font-bold text-accent-teal ml-2">Reuven</div>
      </div>

      <div className="max-[700px]:hidden space-x-6 font-mono text-sm">
        <a href="#profile" className="hover:text-accent-green transition-colors">Profile</a>
      </div>
    </nav>
  );
}