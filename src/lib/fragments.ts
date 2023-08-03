const fragImports = Object.entries(import.meta.glob('../content/slides/fragments/*.svelte', { eager: true }));

const fragObj = {}

fragImports.forEach(([path, module]) => {
  const slug = path.split('/').at(-1)?.replace('.svelte', '');
  fragObj[slug] = [path, module];
});

export const fragments = fragObj;
