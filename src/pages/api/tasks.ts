import { NextApiRequest, NextApiResponse } from "next";
import { TasksService } from "@/tasks";
import { schema } from "@/tasks/service/create-task/schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.json({
      message: "Method not allowed",
    });
  }
  console.log(req.body);
  const request = schema.parse(req.body);
  const task = await TasksService.createTask(request);
  return res.json(task);
}
