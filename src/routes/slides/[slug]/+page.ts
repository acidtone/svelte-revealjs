import { decks } from '$lib/decks';

export const ssr = false

export async function load({ params }) {

  let content = {};

  if (decks.hasOwnProperty(params.slug)) {
    content.path = decks[params.slug][0];
    content.module = decks[params.slug][1];
  }

  return {
    path: content?.path,
    module: content?.module.default
  }
}