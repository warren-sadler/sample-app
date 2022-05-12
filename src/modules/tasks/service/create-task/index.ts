import { PrismaClient, Task } from "@prisma/client";

interface CreateCreateTaskParams {
  prismaClient: PrismaClient;
}

type CreateTaskParams = Pick<Task, "title">;

export function createCreateTasks(params: CreateCreateTaskParams) {
  const { prismaClient } = params;
  return async function createTasks(params: CreateTaskParams) {
    return await prismaClient.task.create({
      data: params,
    });
  };
}
