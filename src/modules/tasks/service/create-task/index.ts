import { PrismaClient, Task } from "@prisma/client";
import { CreateTaskRequest } from "./schema";

interface CreateCreateTaskParams {
  prismaClient: PrismaClient;
}

export function createCreateTask(params: CreateCreateTaskParams) {
  const { prismaClient } = params;
  return async function createTask(params: CreateTaskRequest): Promise<Task> {
    return await prismaClient.task.create({
      data: params,
    });
  };
}
