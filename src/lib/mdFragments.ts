const fragImports = Object.entries(import.meta.glob('../content/slides/fragments/*.md', { as: 'raw', eager: true }));

let fragObj = {};

fragImports.forEach(async ([path, module]) => {
  const slug = path.split('/').at(-1)?.replace('.md', '');
  fragObj[slug] = [path, module];
});

export const MdFragments = fragObj;

// export const fragments = await Promise.all(
//   fragImports.map(async ([path, resolver]) => {
//     const { metadata } = await resolver();
//     const slug = path.split('/').at(-1)?.replace('.md', '');


//     return { ...metadata, slug }
//   })
// )