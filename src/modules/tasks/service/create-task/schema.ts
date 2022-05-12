import * as z from "zod";

export const schema = z.object({
  title: z.string(),
});

export type CreateTaskRequest = z.infer<typeof schema>;

export const isValid = (value: unknown): value is CreateTaskRequest => {
  try {
    schema.parse(value);
    return true;
  } catch {
    return false;
  }
};
