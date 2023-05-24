import { Todo } from "@prisma/client";
import { prisma } from "./db";

export const getTodos = (): Promise<Todo[]> => {
  return prisma.todo.findMany();
};
