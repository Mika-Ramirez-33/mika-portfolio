import React from 'react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const documentationUrl = project.githubUrl || 'TUENLACE*';

  const hasDocumentation =
    documentationUrl.startsWith('http://') ||
    documentationUrl.startsWith('https://');

  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-[var(--border-color)]
        bg-[var(--background-secondary)]
        shadow-[0_14px_34px_var(--shadow-color)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500/30
        hover:shadow-[0_20px_45px_var(--shadow-color)]
      "
    >
      {/* Cover */}
      <div className="relative h-52 overflow-hidden bg-[var(--background-primary)]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            via-transparent
            to-transparent
          "
        />

        {project.featured && (
          <span
            className="
              absolute
              right-4
              top-4
              rounded-full
              border
              border-white/20
              bg-blue-600
              px-3
              py-1
              text-xs
              font-semibold
              text-white
              shadow-lg
              backdrop-blur-md
            "
          >
            Destacado
          </span>
        )}

        <div
          className="
            absolute
            bottom-4
            left-4
            rounded-lg
            border
            border-white/15
            bg-black/35
            px-2.5
            py-1
            text-[11px]
            font-medium
            tracking-wide
            text-white
            backdrop-blur-md
          "
        >
          CASE STUDY
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex-1">
          <h3
            className="
              text-xl
              font-semibold
              tracking-tight
              text-[var(--text-primary)]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-6
              text-[var(--text-secondary)]
            "
          >
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                data-tag={tag.toLowerCase()}
                className="
                  rounded-full
                  border
                  border-[var(--border-color)]
                  bg-[var(--background-primary)]
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-[var(--text-muted)]
                  transition-colors
                  group-hover:border-blue-500/20
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="my-5 h-px bg-[var(--border-color)]" />

        {/* Footer */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[var(--text-muted)]
              "
            >
              Documentación
            </p>

            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              GitHub Repository
            </p>
          </div>

          {hasDocumentation ? (
            <a
              href={documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                transition-all
                hover:-translate-y-0.5
                hover:bg-blue-700
              "
            >
              Ver documentación

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5h5v5M10 14L19 5M19 13v6H5V5h6"
                />
              </svg>
            </a>
          ) : (
            <span
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--border-color)]
                bg-[var(--background-primary)]
                px-4
                py-2
                text-sm
                font-medium
                text-[var(--text-muted)]
              "
              title="Repositorio pendiente"
            >
              TUENLACE*
            </span>
          )}
        </div>
      </div>
    </article>
  );
};