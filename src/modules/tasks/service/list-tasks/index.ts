import { PrismaClient } from "@prisma/client";

interface CreateListTasksParams {
  prismaClient: PrismaClient;
}

export function createListTasks(params: CreateListTasksParams) {
  const { prismaClient } = params;
  return async function listTasks() {
    return (await prismaClient.task.findMany()).map((task) => ({
      ...task,
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
    }));
  };
}
