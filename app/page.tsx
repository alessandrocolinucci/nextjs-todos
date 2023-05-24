import { Todo } from "@prisma/client";
import Link from "next/link";
import TodoItem from "./components/TodoItem";
import { getTodos } from "./database/prisma.query";

const Home = async () => {
  
  const todos = await getTodos();

  return (
    <>
      <header className="flex items-center justify-between w-full py-2">
        <h1 className="underline">Home - Todos</h1>
        <Link href={'/new'} className="flex items-center gap-2 py-2 px-4 rounded-md transition hover:bg-slate-700">Add new</Link>
      </header>

      <main className="py-4">
        <h3 className="mb-2">Here your todo list</h3>
        <ul className="pl-4">
          {todos.map((todo: Todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      </main>
    </>
  )
}

export default Home;