import { PrismaClient } from "@prisma/client";

interface CreateListTasksParams {
  prismaClient: PrismaClient;
}

export function createListTasks(params: CreateListTasksParams) {
  const { prismaClient } = params;
  return async function listTasks() {
    return await prismaClient.task.findMany();
  };
}
