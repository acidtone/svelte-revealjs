const deckImports = Object.entries(import.meta.glob('../content/slides/decks/*.svelte', { eager: true }));

const deckObj = {}

deckImports.forEach(([path, module]) => {
  const slug = path.split('/').at(-1)?.replace('.svelte', '');
  deckObj[slug] = [path, module];
});

export const decks = deckObj;
