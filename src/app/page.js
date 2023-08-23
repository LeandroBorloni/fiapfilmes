import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <nav className="flex p-4 bg-slate-900">
        <ul className="flex gap-20">
          <li>
            <a href="#">
              <h1>FiapFilmes</h1>
            </a>
          </li>
          <li>
            <a href="#">
              Favoritos
            </a>
          </li>
          <li>
            <a href="#">
              Filmes
            </a>
          </li>
        </ul>
      </nav>
      <Title>Favoritos</Title>
      <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
        <img className="rounded" src="https://place-hold.it/150x220/666" alt=""></img>
        <span className="font-bold text-center line-clamp-1">titulo do filme do card</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">Detalhes</a>
      </div>

      <Title>Filmes</Title>

    </>
  )
}
