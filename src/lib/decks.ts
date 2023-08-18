const svelteImports = Object.entries(import.meta.glob('../content/slides/decks/*.svelte', { eager: true }));
const mdImports = Object.entries(import.meta.glob('../content/slides/decks/*.md', {  as: 'raw', eager: true }));
const deckObj = {}

svelteImports.forEach(([path, module]) => {
  const slug = path.split('/').at(-1)?.replace('.svelte', '');
  deckObj[slug] = [path, module.default, 'svelte'];
});

mdImports.forEach(([path, module]) => {
  console.log('Module: ', module);
  
  const slug = path.split('/').at(-1)?.replace('.md', '');
  if (!deckObj[slug]) {
    deckObj[slug] = [path, module, 'md'];
  }
});

export const decks = deckObj;
