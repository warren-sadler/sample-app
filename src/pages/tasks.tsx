import { TasksService } from "@/tasks";
import { Task } from "@prisma/client";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async function () {
  const tasks = await TasksService.listTasks();
  return {
    props: {
      tasks,
    },
  };
};

interface TasksPageProps {
  tasks: Task[];
}

export default function TasksPage(props: TasksPageProps) {
  return (
    <div>
      <header>
        <h1>Tasks</h1>
      </header>
      <main>
        <ul>
          {props.tasks.map(function (task) {
            return <li key={task.id}>{task.title}</li>;
          })}
        </ul>
      </main>
    </div>
  );
}
