import Link from "next/link";

const New = () => { 
  return (
    <header>
      <Link href={'/'} className="inline-flex items-center gap-2 py-2 px-4 mb-8 rounded-md transition hover:bg-slate-700">
        <span>←</span>
        <span>Go back</span>
      </Link>
      <h1 className="underline">Add new Todo</h1>
    </header>
  )
}

export default New;