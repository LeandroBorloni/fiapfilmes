import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

async function carregarFilmes(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json.results
}

export default async function Home() {
  const filmes = await carregarFilmes()
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
      <Title>Em alta</Title>
      <section className="flex flex-wrap">
        {filmes.map(filme => <CardFilme filme={filme}></CardFilme>)}

      </section>
      <Title>Lançamentos</Title>
      <Title>Favoritos</Title>

    </>
  )
}
