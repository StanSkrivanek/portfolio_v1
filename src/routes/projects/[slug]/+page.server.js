// @ts-nocheck
import * as db from "$lib/server/sanity";
/** @type {import('./$types').PageServerLoad} */


/** @type {import('./$types').PageServerLoad} */

export async function load({ params }) {

  const project = await db.getProjectBySlug(params.slug);

  const { slugs } = await db.getAllSlugs();

  // create array from slug

  const slugsArr = slugs.map((slug) => slug.slug);
  const { prev, next } = prevnext({ project, slugsArr });

  return {
    project: await db.getProjectBySlug(params.slug),
    slugs,
    prev,
    next,
  };
}

function prevnext({ project, slugsArr }) {
  const index = slugsArr.findIndex((/** @type {string} */ slug) => slug === project.slug);
  const prev = slugsArr[index - 1];
  const next = slugsArr[index + 1];

  return {
    prev,
    next,
  };
}

