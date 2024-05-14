/** @type {import('./$types').PageServerLoad} */
import { getAllProjects } from "$lib/server/sanity";

export async function load() {
  const projects = await getAllProjects();
  return {
    projects,
  };
}
