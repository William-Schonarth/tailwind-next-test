export default function Home() {
  return (
    <div className="text-slate-900 p-8 bg-slate-50 h-screen flex flex-col items-center text-center dark:bg-slate-900 dark:text-slate-100">
      <div className="max-w-2xl">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          The big text is below
        </h1>
        <p className="mt-4 dark:text-slate-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          incidunt impedit quia cumque earum necessitatibus unde cum, nostrum
          accusamus ab vero inventore, possimus ipsum autem ut natus eos
          expedita perspiciatis.
        </p>
        <button className="bg-sky-500 text-white dark:bg-sky-400 dark:text-sky-950 px-4 py-2 rounded-md font-medium mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
          Sign in
        </button>
      </div>
    </div>
  )
}
