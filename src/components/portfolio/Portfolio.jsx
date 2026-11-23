import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsGithub, BsArrowUpRight, BsPhone } from "react-icons/bs";
import { projects } from "../../data";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

const hostOf = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Portfolio = () => {
  return (
    <section id="projects" className="py-28 bg-dark-100 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-3">
            Selected work. Real solutions — from my own startup to production systems for clients.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Featured showcase rows */}
        <div className="flex flex-col gap-10">
          {featured.map((project, idx) => (
            <FeaturedProject key={project.id} project={project} reverse={idx % 2 === 1} />
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-2xl font-semibold mt-20 mb-8 text-center"
            >
              More Projects
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/quarshie133"
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <BsGithub size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------- Browser-window frame around a screenshot ---------- */
const BrowserFrame = ({ url, shot, title, className = "" }) => (
  <div
    className={`rounded-xl overflow-hidden border border-white/10 bg-dark-200 shadow-2xl shadow-black/40 ${className}`}
  >
    <div className="flex items-center gap-3 px-4 py-2.5 bg-dark-300/80 border-b border-white/5">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex-1 truncate rounded-md bg-dark/60 px-3 py-1 text-[11px] font-mono text-slate-400">
        {url ? hostOf(url) : "Mobile app — no web demo"}
      </div>
    </div>
    <div className="relative aspect-[16/10] overflow-hidden bg-dark">
      {shot ? (
        <AnimatePresence mode="wait">
          <motion.img
            key={shot.src}
            src={shot.src}
            alt={`${title} — ${shot.label}`}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </AnimatePresence>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-card">
          <BsPhone className="text-primary text-4xl" />
          <span className="text-slate-400 text-sm">{title}</span>
        </div>
      )}
    </div>
  </div>
);

/* ---------- Large featured row ---------- */
const FeaturedProject = ({ project, reverse }) => {
  const [active, setActive] = useState(0);
  const shots = project.screenshots || [];

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="glass-card group grid lg:grid-cols-2 gap-8 p-6 md:p-8 items-center hover:border-primary/20 transition-colors duration-300"
    >
      {/* Text */}
      <div className={reverse ? "lg:order-2" : ""}>
        {project.badge && (
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md bg-primary/10 border border-primary/30 text-primary-light">
            {project.badge}
          </span>
        )}
        <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-slate-500">
          {project.category}
        </p>
        <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white tracking-tight">
          {project.title}
        </h3>
        <p className="mt-4 text-slate-400 leading-relaxed">{project.description}</p>

        {project.facts?.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs text-slate-500">{fact.label}</dt>
                <dd className="mt-0.5 text-lg font-semibold text-white">{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <TechTags tech={project.tech} className="mt-6" />
        <ProjectLinks project={project} className="mt-6" />
      </div>

      {/* Screenshot gallery */}
      <div className={reverse ? "lg:order-1" : ""}>
        <BrowserFrame url={project.demo} shot={shots[active]} title={project.title} />
        {shots.length > 1 && (
          <div className="mt-4 flex gap-3">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${shot.label} screenshot`}
                aria-pressed={i === active}
                className={`flex-1 rounded-lg overflow-hidden border transition-all duration-200 ${
                  i === active
                    ? "border-primary ring-2 ring-primary/30"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={shot.src}
                  alt=""
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover object-left-top"
                />
                <span className="block py-1 text-[11px] text-slate-400 bg-dark-200">{shot.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

/* ---------- Grid card ---------- */
const ProjectCard = ({ project }) => (
  <motion.article
    variants={fadeUp}
    className="glass-card group flex flex-col overflow-hidden hover:border-primary/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
  >
    <div className="p-4 pb-0">
      <BrowserFrame url={project.demo} shot={project.screenshots?.[0]} title={project.title} />
    </div>
    <div className="flex flex-1 flex-col p-6 gap-4">
      <div className="flex-1">
        <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-500">
          {project.category}
        </p>
        <h3 className="mt-1 text-white font-semibold text-lg group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">{project.description}</p>
      </div>
      <TechTags tech={project.tech} />
      <ProjectLinks project={project} className="pt-3 border-t border-white/5" />
    </div>
  </motion.article>
);

/* ---------- Shared bits ---------- */
const TechTags = ({ tech, className = "" }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Technologies">
    {tech.map((t) => (
      <li
        key={t}
        className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-slate-300"
      >
        {t}
      </li>
    ))}
  </ul>
);

const ProjectLinks = ({ project, className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
      >
        <BsGithub size={15} />
        Code
      </a>
    )}
    {project.demo && (
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-light transition-colors ml-auto font-medium"
      >
        View Live
        <BsArrowUpRight size={13} />
      </a>
    )}
  </div>
);

export default Portfolio;
