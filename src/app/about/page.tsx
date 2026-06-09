import { Globe, Mail } from "lucide-react";

const skills = [
  "Godot Engine",
  "ComfyUI",
  "AI Art Direction",
  "Q版 / Chibi Design",
  "Stable Diffusion",
  "LoRA Training",
  "Visual Identity",
  "Creative Direction",
];

const links = [
  { label: "GitHub", href: "#", icon: Globe },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-4xl">
        {/* Super minimal intro — poster style */}
        <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6">
          About
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
          I MAKE
          <br />
          <span className="text-cherry">THINGS</span> THAT
          <br />
          DIDN&rsquo;T EXIST
          <br />
          YESTERDAY
        </h1>

        <p className="mt-10 text-text-secondary text-lg sm:text-xl max-w-lg leading-relaxed">
          A creative technologist working at the intersection of game design,
          AI art, and digital culture. I build visual worlds — from chibi
          character series to interactive prototypes — using whatever tools
          the moment demands.
        </p>

        {/* Skills — not bars, just tags */}
        <div className="mt-14">
          <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-4">
            Tools &amp; Focus
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-2 text-sm font-medium
                  border border-border
                  text-text-secondary
                  hover:border-cherry hover:text-text-primary
                  transition-colors duration-200
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact — just icons, no form */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6">
            Connect
          </p>
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  group flex items-center gap-2
                  text-text-secondary hover:text-cherry
                  text-sm font-medium tracking-wide
                  transition-colors duration-200
                "
              >
                <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
