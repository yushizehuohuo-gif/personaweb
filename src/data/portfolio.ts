export interface PortfolioItem {
  id: string;
  title: string;
  category: "ai-art" | "concept" | "game";
  categoryLabel: string;
  description: string;
  accent: "imperial-red" | "orange-web" | "keppel" | "giants-orange" | "delft-blue";
  span: "1x1" | "1x2" | "2x1" | "2x2";
  aspect: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "dota2-chibi",
    title: "DOTA 2\nChibi Collection",
    category: "ai-art",
    categoryLabel: "AI Art",
    description:
      "A series reimagining Dota 2 heroes through chibi aesthetics. Each piece explores proportion, color, and personality at miniature scale.",
    accent: "imperial-red",
    span: "2x2",
    aspect: "aspect-[4/5]",
  },
  {
    id: "neo-tokyo-visual",
    title: "Neo Tokyo\nVisual Study",
    category: "concept",
    categoryLabel: "Concept Art",
    description:
      "Future pop editorial compositions at the intersection of anime, fashion, and digital aesthetics.",
    accent: "orange-web",
    span: "1x1",
    aspect: "aspect-[3/4]",
  },
  {
    id: "deadlock-style",
    title: "Deadlock\nStyle Exploration",
    category: "concept",
    categoryLabel: "Concept Art",
    description:
      "Visual identity experiments reimagining Deadlock through a fashion-editorial lens.",
    accent: "keppel",
    span: "2x1",
    aspect: "aspect-[16/9]",
  },
  {
    id: "godot-prototype",
    title: "Indie Game\nPrototypes",
    category: "game",
    categoryLabel: "Game Dev",
    description:
      "Experimental game prototypes built with Godot - exploring mechanics, mood, and minimalist aesthetics.",
    accent: "giants-orange",
    span: "1x1",
    aspect: "aspect-[3/4]",
  },
  {
    id: "comfyui-experiments",
    title: "ComfyUI\nExperiments",
    category: "ai-art",
    categoryLabel: "AI Art",
    description:
      "Custom ComfyUI workflows for character design, style transfer, and abstract visual generation.",
    accent: "delft-blue",
    span: "1x1",
    aspect: "aspect-[1/1]",
  },
  {
    id: "q-version-series",
    title: "Q-version\nArt Series",
    category: "ai-art",
    categoryLabel: "AI Art",
    description:
      "Super-deformed character art series exploring chibi proportions with AI generation techniques.",
    accent: "orange-web",
    span: "1x2",
    aspect: "aspect-[3/4]",
  },
  {
    id: "firsttry",
    title: "Fantasy\nLandscape Study",
    category: "ai-art",
    categoryLabel: "AI Art",
    description:
      "A 4-panel fantasy landscape composition exploring Eastern aesthetics, epic atmosphere, and the interplay of red and teal tones.",
    accent: "imperial-red",
    span: "2x1",
    aspect: "aspect-[16/9]",
  },
];

export const categories = [
  { id: "all", label: "ALL" },
  { id: "ai-art", label: "AI ART" },
  { id: "concept", label: "CONCEPT" },
  { id: "game", label: "GAME DEV" },
] as const;
