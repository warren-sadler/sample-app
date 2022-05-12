import { prisma } from "@/libs/prisma";
import { createListTasks } from "./list-tasks";

const TasksService = {
  listTasks: createListTasks({
    prismaClient: prisma,
  }),
};

export default TasksService;
