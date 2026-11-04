import type { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:border-cyan-500/50">
      <div className="relative aspect-video w-full overflow-hidden rounded-md border border-white/10 bg-black/20">
        {project.imageUrl && project.imageAlt ? (
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 28rem"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-white/5 to-cyan-950/20 px-4 text-center font-mono text-xs text-gray-600">
            <span aria-hidden="true">[ project image unavailable ]</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div className="min-h-8">
          {project.eventLabel && (
            <p className="font-mono text-xs uppercase tracking-wider text-accent-blue">
              Hackathon Entry // {project.eventLabel}
            </p>
          )}
        </div>

        <h3 className="min-h-14 text-xl font-bold text-white">
          {project.title}
        </h3>

        <div className="min-h-12">
          {project.subtitle && (
            <p className="text-sm text-gray-300">{project.subtitle}</p>
          )}
        </div>

        <p className="font-mono text-sm text-cyan-400">
          Status: {project.status}
        </p>
        <p className="pt-3 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-4 font-mono text-xs">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded bg-black/30 px-2 py-1 text-gray-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="min-h-11 pt-3">
          {project.linkUrl && (
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full rounded border border-cyan-500/40 bg-cyan-950/30 py-2 text-center font-mono text-xs text-cyan-400 transition-colors hover:bg-cyan-900/50 hover:text-white"
            >
              {project.linkText || "[ View Project ]"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
