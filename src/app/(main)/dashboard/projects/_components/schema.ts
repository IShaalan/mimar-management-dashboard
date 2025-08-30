import z from "zod";

export const projectsSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  status: z.string(),
  priority: z.string(),
  projectManager: z.string(),
  budget: z.string(),
  progress: z.string(),
  tasks: z.string(),
  percentageCompleted: z.string(),
});
