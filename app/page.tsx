import ProjectCard from "@/components/ProjectCard";
import { certifications } from "@/data/certifications";
import { communityOrganizations } from "@/data/community";
import { currentlyLearning } from "@/data/currently-learning";
import { hackathons } from "@/data/hackathons";
import { interests } from "@/data/interests";
import { languages } from "@/data/languages";
import { projects } from "@/data/projects";
import { tools } from "@/data/tools";
import Image from "next/image";

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
            <p className="text-gray-700">{"//"}<b className="text-cyan-500"> BSIT Sophomore</b></p>
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
            <div className="border border-accent-cyan/90 bg-cyan-950/50 p-2 rounded-lg">
              <a
                href="https://www.linkedin.com/in/reuvenjimenez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Reuven Jimenez on LinkedIn"
                className="flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span>LinkedIn</span>
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
              {languages.map((language) => (
                <span key={language} className="px-2 py-1 bg-red-950/50 border border-red-500/30 rounded text-red-500">
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-yellow-500 border-b border-yellow-500/30 pb-2">02 // Currently Learning</h3>
            <div className="flex flex-wrap gap-2">
              {currentlyLearning.map((subject) => (
                <span key={subject} className="px-2 py-1 bg-yellow-950/50 border border-yellow-500/30 rounded text-yellow-500">
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-green-500 border-b border-green-500/30 pb-2">03 // Tools</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="px-2 py-1 bg-green-950/50 border border-green-500/30 rounded text-green-500">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-blue-500 border-b border-blue-500/30 pb-2">04 // Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span key={interest} className="px-2 py-1 bg-blue-950/50 border border-blue-500/30 rounded text-blue-500">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h3 className="text-red-500 font-mono text-sm tracking-wider uppercase border-b border-red-500/20 pb-2">
              05 // Community
            </h3>
            
            <div className="flex flex-col gap-3">
              {communityOrganizations.map((organization) => (
                <div
                  key={organization.name}
                  className="flex min-h-28 flex-col p-3 bg-red-950/40 hover:bg-red-950/70 border border-red-500/30 hover:border-red-500/60 rounded-md transition-all duration-200 shadow-sm"
                >
                  <span className="text-red-200 text-sm font-semibold tracking-wide">
                    {organization.name}
                  </span>
                  <span className="text-gray-400 text-xs mt-1">
                    {organization.description}
                  </span>
                  <span className="text-red-500 text-xs font-mono mt-auto pt-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    {organization.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:col-span-2">
            <h3 className="text-cyan-400 font-mono text-sm tracking-wider uppercase border-b border-cyan-500/20 pb-2">
              06 // Certifications &amp; Recognitions
            </h3>

            {certifications.map((certification) => (
              <article
                key={certification.title}
                className="grid gap-6 rounded-lg border border-cyan-500/30 bg-cyan-950/30 p-5 transition-colors hover:border-cyan-500/60 md:grid-cols-[12rem_1fr] md:items-center"
              >
                <a
                  href={certification.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open the official ${certification.title} badge at full size`}
                  className="relative mx-auto aspect-square w-full max-w-48 rounded-md border border-cyan-500/20 bg-black/20 p-3"
                >
                  <Image
                    src={certification.imageUrl}
                    alt={certification.imageAlt}
                    fill
                    sizes="(max-width: 768px) 12rem, 12rem"
                    className="object-contain p-3"
                  />
                </a>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-cyan-400">
                      Professional Recognition
                    </p>
                    <h4 className="text-xl font-bold text-white">
                      {certification.title}
                    </h4>
                    <p className="font-mono text-sm text-cyan-300">
                      {certification.level}
                    </p>
                  </div>

                  <div className="space-y-1 text-sm leading-relaxed text-gray-400">
                    <p>{certification.issuer}</p>
                    <p>Recognized {certification.date}</p>
                  </div>

                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded border border-cyan-500/40 bg-cyan-950/40 px-4 py-2 font-mono text-xs text-cyan-400 transition-colors hover:bg-cyan-900/50 hover:text-white"
                  >
                    Verify Recognition
                  </a>
                  <p className="text-xs text-gray-500">
                    Opens the official DICT Cybersecurity Professionals Portal; the badge contains the personal verification details.
                  </p>
                </div>
              </article>
            ))}
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

        <div className="grid items-stretch gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Hackathons & Experience Section */}
      <section id="hackathons" className="space-y-8">
        <div className="font-mono text-sm text-gray-500">
          <span className="text-accent-cyan">$</span> cat ./hackathons.log
        </div>

        <h2 className="text-4xl font-bold text-white tracking-tight">
          Hackathons &amp; <span className="text-accent-blue">Experience</span>
        </h2>

        <div className="space-y-4">
          {hackathons.map((hackathon) => (
            <article
              key={`${hackathon.event}-${hackathon.team}`}
              className="p-5 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-colors"
            >
              <div className="grid gap-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-center">
                <div className="relative aspect-video w-full overflow-hidden rounded-md border border-white/10 bg-black/20">
                  <Image
                    src={hackathon.imageUrl}
                    alt={hackathon.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 14rem"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-col gap-3">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white">{hackathon.event}</h3>
                      <p className="text-sm text-cyan-400 font-mono">
                        {hackathon.team}{" // "}{hackathon.recognition}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 font-mono whitespace-nowrap">
                      {hackathon.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 font-mono">Project: {hackathon.project}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {hackathon.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-8">
        <div className="font-mono text-sm text-gray-500">
          <span className="text-accent-cyan">$</span> ping -c 1 contact-me
        </div>

        <h2 className="text-4xl font-bold text-white tracking-tight">
          Get in <span className="text-accent-cyan">Touch</span>
        </h2>

        <div className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-6 max-w-2xl">

          <div className="flex flex-col sm:flex-row gap-4 font-mono text-sm">
            <a 
              href="mailto:reuvendev@proton.me"
              className="flex items-center justify-center gap-2 px-5 py-3 border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-400 hover:text-white rounded transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>reuvendev@proton.me</span>
            </a>
          </div>
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
