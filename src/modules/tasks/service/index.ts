import { prisma } from "@/libs/prisma";
import { createCreateTask } from "./create-task";
import { createListTasks } from "./list-tasks";

const TasksService = {
  listTasks: createListTasks({
    prismaClient: prisma,
  }),
  createTask: createCreateTask({
    prismaClient: prisma,
  }),
};

export default TasksService;
