import Link from "next/link";

const New = () => { 
  return (
    <>
      <header>
        <Link href={'/'} className="inline-flex items-center gap-2 py-2 px-4 mb-8 rounded-md transition hover:bg-slate-700">
          <span>←</span>
          <span>Go back</span>
        </Link>
        <h1 className="underline">Add new Todo</h1>
      </header>
      <form action="POST" className="py-4">
        <div className="flex items-center gap-2">
          <input type="text" name="title" className="px-4 py-2 bg-transparent border-2 border-solid border-slate-500 outline-none rounded-md transition-all focus-within:border-slate-200" placeholder="Todo title" />
          <button type="submit" className="py-2 px-4 rounded-md border-2 border-solid border-slate-700 transition bg-slate-900 hover:bg-slate-700">Add to todolist</button>
        </div>
      </form>
    </>

  )
}

export default New;