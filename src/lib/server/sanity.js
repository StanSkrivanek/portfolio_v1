// @ts-nocheck

import { env } from "$env/dynamic/private";
import { SanityClient, createClient } from "@sanity/client";
import { allProjectsSchema, projectSchema } from "$lib/types";

/**
 * @return {SanityClient}
 */

function sanityClient() {
  /**
   * @type {import('../types').SanityConfig}
   */
  const config = {
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_PROJECT_DATASET,
    apiVersion: "2021-10-21",
    // useCdn: true,
    // token: env.SANITY_TOKEN,
  };
  return createClient({ ...config });
}

export const getAllProjects = async () => {
  const client = sanityClient();
  const allProjectsQuery = `*[_type == "project" && featured == true ]{
    "id": _id,
    title,
    "slug": slug.current,
    "thumbnail": thumbnail.asset->url,
    brief

  }`;

  /**
   * @type {import('../types').AllProjects}
   */
  const allProjects = await client.fetch(allProjectsQuery);
  return allProjectsSchema.parse(allProjects);
};


/**
 * Retrieves a project by its slug.
 *
 * @param {string} slug - The slug of the project.
 * @return {Promise<Project>} The project with the specified slug.
 */
export const getProjectBySlug = async (slug) => {
  const client = sanityClient();
  const query = `*[_type == "project" && slug.current == '${slug}']{
   "id":_id,
  title,
  "slug": slug.current,
  "thumbnail": thumbnail.asset->url,
  "image_1": image_1.asset->url,
  "image_2": image_2.asset->url,
  "image_3": image_3.asset->url,
  brief,
  branding,
  approach,
  marketplace,
  website,
  link,
  jobs,
  maintenance,
  "techstack": techstack[] {
  _type == 'reference' => @->{
    title,
    "logo" : logo.asset->url,
  },
  _type != 'reference' => @
},
  year,
  content

}`;

  /**
   * @type {import('../types').Project}
   */
  const project = await client.fetch(query);
  return projectSchema.parse(project[0]);
};


/**
 * Retrieves all slugs based on a given slug.
 *
 * @param {string} slug - The slug to search for.
 * @return {Promise<{ slugs: import('../types').AllSlugs }>} - An object containing an array of slugs.
 */
export const getAllSlugs = async () => {
  const client = sanityClient();
  const query = `*[_type == "project" && featured == true]{
    "slug": slug.current,
  }`;

  const slugs = await client.fetch(query);
  return {
    slugs,
  };
};

