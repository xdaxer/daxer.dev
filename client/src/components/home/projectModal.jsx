import React, { useEffect } from "react";
import { createPortal } from "react-dom";

function ProjectModal({ open, onClose, project }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
     
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      <div className="pointer-events-none absolute top-1/4 left-1/3 w-56 h-56 bg-[#46844320] rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/3 w-56 h-56 bg-yellow-500/20 rounded-full blur-3xl" />

      <div
        className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto contact-scroll rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-white/10 bg-black/20 backdrop-blur-xl px-5 py-4 md:px-8">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-white truncate">
                {project.name}
              </h3>
              <span className="rounded-full border border-green-400/30 bg-green-500/15 px-3 py-1 text-xs font-medium text-green-300">
                {project.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-400">
              Project details overview
            </p>
          </div>

          <button
            onClick={onClose}
            className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300 hover:bg-white/10 hover:text-white transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="p-5 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-base md:text-lg text-zinc-100 leading-[1.85] tracking-wide font-medium">
                {project.description}
              </p>

              {project.fullDescription && (
                <p className="text-sm md:text-[0.95rem] text-zinc-300 leading-[1.9] tracking-wide border-l-2 border-emerald-500/40 pl-4">
                  {project.fullDescription}
                </p>
              )}

              <div>
                <h4 className="text-lg font-semibold text-emerald-300 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(project.Techs || project.technologies || []).map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-200 tracking-wide"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/10 hover:text-white transition"
                  >
                    <span>↗</span>
                    View Code
                  </a>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
                  >
                    <span>●</span>
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-5">
              {/* Progress */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-300 tracking-wide">Progress</span>
                  <span className="text-base font-bold text-emerald-300">
                    {project.progress}%
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                    style={{ width: `${project.progress || 0}%` }}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500 mb-1.5">
                    Started
                  </div>
                  <div className="text-sm text-zinc-100 font-semibold">
                    {project.started || project.startDate}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500 mb-1.5">
                    Type
                  </div>
                  <div className="text-sm text-zinc-100 font-semibold">
                    {project.type || "Full-Stack Web App"}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500 mb-1.5">
                    Team
                  </div>
                  <div className="text-sm text-zinc-100 font-semibold">
                    {project.team || "Solo Project"}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h4 className="mb-3 text-sm font-semibold text-emerald-300">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {(project.keyFeatures || project.features || [])
                    .slice(0, 6)
                    .map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-zinc-300 leading-snug"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold text-teal-300 mb-3">
                Challenges
              </h4>
              <ul className="space-y-3">
                {(project.challenges || []).map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-zinc-300 leading-snug"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold text-yellow-300 mb-3">
                Key Learnings
              </h4>
              <ul className="space-y-3">
                {(project.keyLearnings || project.learnings || []).map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-zinc-300 leading-snug"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold text-green-300 mb-3">
                All Features
              </h4>
              <ul className="space-y-3">
                {(project.allFeatures || project.features || []).map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-zinc-300 leading-snug"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
export default ProjectModal
