import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className=" flex items-center gap-3">
      <img
        src="https://github.com/william-schonarth.png"
        className="h-10 w-10 rounded-full"
        alt="Foto do perfil do usuário"
      />
      <div className="flex flex-1 flex-col truncate ">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Gtec
        </span>
        <span className="truncate text-xs text-zinc-700">
          gtec@haventdomain.com
        </span>
      </div>
      <button
        type="button"
        className="group ml-auto rounded p-2 hover:bg-zinc-50 "
      >
        <LogOut className=" h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
      </button>
    </div>
  )
}
