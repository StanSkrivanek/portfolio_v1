import * as z from "zod";

export const allProjectsSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    brief: z.string(),
    thumbnail: z.string(),
  })
);

export type AllProjects = z.infer<typeof allProjectsSchema>;

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  thumbnail: z.string(),
  image_1: z.string(),
  image_2: z.string(),
  image_3: z.string(),
  brief: z.string(),
  branding: z.string(),
  approach: z.string(),
  marketplace: z.string(),
  website: z.string(),
  link: z.string(),
  techstack: z.any(),
  jobs: z.array(z.string()),
  maintenance: z.boolean(),
  year: z.string(),
  content: z.array(
    z.object({
      _key: z.string(),
      _type: z.string(),
      children: z.array(
        z.object({
          _key: z.string(),
          _type: z.string(),
          marks: z.array(z.string()),
          text: z.string(),
        })
      ),
      markDefs: z.array(
        z.object({
          _key: z.string(),
          _type: z.string(),
          href: z.string(),
        })
      ),
      style: z.string(),
    })
  ),
});

export type Project = z.infer<typeof projectSchema>;

export type sanityConfig = {
  projectId: string;
  dataset: string;
  useCdn: boolean;
  apiVersion: string;
  //   token: string;
};

// validate email address
export const contactEmailSchema = z.object({
  name: z.string({ required_error: "Name is required" }).min(2, { message: "Name must be at least 2 characters" }).trim(),
  email: z.string({ required_error: "Email is required" }).email({ message: "Email must be a valid email address" }),
  service: z.array(z.string()).nonempty({ message: "Please select at least one service" }),
  budget: z.enum(["500-1.5k", "1.5k-3k", "3k-5k", "5k-10k", "10k+"], { errorMap: () => ({ message: "Please select a budget" }) }),
  message: z.string({ required_error: "Message is required" }).min(10, { message: "Message must be at least 10 characters" }).trim(),
});

export type ContactEmail = z.infer<typeof contactEmailSchema>;
