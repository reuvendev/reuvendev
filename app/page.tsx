import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      
      <section id="home" className="space-y-8">
        
        <div className="font-mono text-sm space-y-1">
          <div className="text-accent-cyan">&gt; Initializing portfolio...</div>
        </div>

        <div className="space-y-5">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Reuven Jimenez
          </h1>
          <div className="leading-relaxed max-w-2xl text-md">
            <p className="text-gray-700">//<b className="text-cyan-500"> BSIT Sophomore</b></p>
          </div>

          <div className="flex flex-wrap gap-5 font-mono text-sm">
           {/* <div className="border border-accent-cyan/90 bg-cyan-950/50 p-2 rounded-lg">
              <a href="https://github.com/reuvendev" target="_blank" className="flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span>GitHub</span>
            </a>
            </div> */}
            <div className="border border-accent-cyan/90 bg-cyan-950/50 p-2 rounded-lg">
              <a href="mailto:reuvendev@proton.me" className="flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>reuvendev@proton.me</span>
              </a>
            </div>
          </div>
          
        </div>

        {/* Bio Section */}
        <div className="border-l-2 border-accent-blue pl-6 py-2">
          <p className="text-gray-300 leading-relaxed max-w-2xl text-lg">
            BSIT student based in Baguio City, Philippines. Interested in Cybersecurity, Capture-the-Flag competitions, Web Development, Software Development, Cloud Infrastructure (AWS), Networking Fundamentals, and Game Development.
          </p>
        </div>
      </section>

      <section id="profile" className="space-y-8">
        {/* Terminal Command */}
        <div className="font-mono text-sm text-gray-500">
          <span className="text-accent-cyan">$</span> cat ./student-profile.json
        </div>

        <h2 className="text-4xl font-bold text-white tracking-tight">
          Student <span className="text-accent-blue">Profile</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-white/10 bg-white/5 p-4 rounded">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Status</p>
            <p className="text-accent-teal font-mono">BSIT Student</p>
          </div>
          <div className="border border-white/10 bg-white/5 p-4 rounded">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Year</p>
            <p className="text-white font-mono">2nd Year</p>
          </div>
          <div className="border border-white/10 bg-white/5 p-4 rounded">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Location</p>
            <p className="text-white font-mono">Baguio City</p>
          </div>
          <div className="border border-white/10 bg-white/5 p-4 rounded">
            <p className="text-xs text-gray-400 uppercase tracking-widest">Focus</p>
            <p className="text-accent-amber font-mono">Exploring</p>
          </div>
        </div>

        {/* Skills Matrix */}
        <div className="grid md:grid-cols-2 gap-8 font-mono text-sm">
          
          <div className="space-y-4">
            <h3 className="text-red-500 border-b border-red-500/30 pb-2">01 // Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-950/50 border border-red-500/30 rounded text-red-500">Java</span>
              <span className="px-2 py-1 bg-red-950/50 border border-red-500/30 rounded text-red-500">C++</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-yellow-500 border-b border-yellow-500/30 pb-2">02 // Currently Learning</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-yellow-950/50 border border-yellow-500/30 rounded text-yellow-500">Java</span>
              <span className="px-2 py-1 bg-yellow-950/50 border border-yellow-500/30 rounded text-yellow-500">C++</span>
              <span className="px-2 py-1 bg-yellow-950/50 border border-yellow-500/30 rounded text-yellow-500">UI Design</span>
              <span className="px-2 py-1 bg-yellow-950/50 border border-yellow-500/30 rounded text-yellow-500">Cybersecurity</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-green-500 border-b border-green-500/30 pb-2">03 // Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-950/50 border border-green-500/30 rounded text-green-500">VS Code</span>
              <span className="px-2 py-1 bg-green-950/50 border border-green-500/30 rounded text-green-500">Git & GitHub</span>
              <span className="px-2 py-1 bg-green-950/50 border border-green-500/30 rounded text-green-500">Figma</span>
              <span className="px-2 py-1 bg-green-950/50 border border-green-500/30 rounded text-green-500">Vercel</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-blue-500 border-b border-blue-500/30 pb-2">04 // Interests</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-950/50 border border-blue-500/30 rounded text-blue-500">Cybersecurity</span>
              <span className="px-2 py-1 bg-blue-950/50 border border-blue-500/30 rounded text-blue-500">Capture-the-Flag competitions</span>
              <span className="px-2 py-1 bg-blue-950/50 border border-blue-500/30 rounded text-blue-500">Web Development</span>
              <span className="px-2 py-1 bg-blue-950/50 border border-blue-500/30 rounded text-blue-500">Software Development</span>
              <span className="px-2 py-1 bg-blue-950/50 border border-blue-500/30 rounded text-blue-500">Game Development</span>
              <span className="px-2 py-1 bg-blue-950/50 border border-blue-500/30 rounded text-blue-500">Cloud Infrastructure (AWS)</span>
            </div>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h3 className="text-red-500 border-b border-red-500/20 pb-2">05 // Community</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-red-950/50 border border-red-500/30 rounded text-red-500">Member, Integrated Confederacy (ICON)</span>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-8">
        <div className="font-mono text-sm text-gray-500">
          <span className="text-accent-cyan">$</span> ls -la ./projects
        </div>

        <h2 className="text-4xl font-bold text-white tracking-tight">
          Completed <span className="text-accent-cyan">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-5 bg-white/5 border border-white/10 rounded-lg flex flex-col justify-between space-y-4 hover:border-cyan-500/50 transition-colors"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-cyan-400 font-mono">Status: {project.status}</p>
                <p className="text-gray-400 text-sm leading-relaxed pt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-black/30 rounded text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.linkUrl && (
                <div className="pt-2">
                  <a 
                    href={project.linkUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center font-mono text-xs text-cyan-400 hover:text-white border border-cyan-500/40 bg-cyan-950/30 hover:bg-cyan-900/50 py-2 rounded transition-colors"
                  >
                    {project.linkText || "[ View Project ]"}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section (Commented Out) 
      <section id="certificates" className="space-y-6">
        <div className="font-mono text-sm text-gray-500">
          <span className="text-accent-cyan">$</span> cat ./certificates.log
        </div>

        <h2 className="text-4xl font-bold text-white tracking-tight">
          Certificates & <span className="text-purple-400">Credentials</span>
        </h2>

        <div className="grid gap-3 font-mono text-sm">
          <div className="p-4 bg-purple-950/20 border border-purple-500/30 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div>
              <p className="text-purple-300 font-semibold">Introduction to Cybersecurity</p>
              <p className="text-xs text-gray-400">Cisco</p>
            </div>
            <span className="text-xs px-2 py-1 bg-purple-900/40 border border-purple-500/40 rounded text-purple-300">2026</span>
          </div>

          <div className="p-4 bg-purple-950/20 border border-purple-500/30 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <div>
              <p className="text-purple-300 font-semibold">Ethical Hacker</p>
              <p className="text-xs text-gray-400">Cisco</p>
            </div>
            <span className="text-xs px-2 py-1 bg-purple-900/40 border border-purple-500/40 rounded text-purple-300">2026</span>
          </div>
        </div>
      </section> */}
      
    </main>
  );
}