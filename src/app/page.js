import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

export default function Home() {
  const filmes = [
    {
      titulo: "Megatubarão 2",
      nota: 6.2,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg"
    },
    {
      titulo: "Barbie",
      nota: 7.4,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    }
  ]
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
