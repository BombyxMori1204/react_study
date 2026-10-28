import ItemCard from "./ItemCard"
import Footer from "./Footer"

type ContentProps = {
    Title: string,
    Semititle: string,
    Year: number,
}

const adv = [
    { number: 26, h1: "ЛЕТ", h2: "на рынке" },
    { number: 26, h1: "ЛЕТ", h2: "на рынке" },
    { number: 26, h1: "ЛЕТ", h2: "на рынке" },
    { number: 26, h1: "ЛЕТ", h2: "на рынке" },
]

const projects = [
    {
        title: "Арена",
        description: "Мы создали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для развития новых масштабных проектов.",
    },
    {
        title: "Арена",
        description: "Мы создали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для развития новых масштабных проектов.",
    },
    {
        title: "Арена",
        description: "Мы создали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для развития новых масштабных проектов.",
    },
]

export default function Content({ Title, Semititle, Year }: ContentProps) {
    return (
        <div className="page">
            <header className="header_container">
                <div className="hero_content container">
                    <h1>Реализуем крупнейшие<br />проекты в мире</h1>
                    <p>Стадионы, газопроводы, мосты, дамбы</p>
                </div>
            </header>

            <section className="advantages" aria-label="Опыт компании">
                {adv.map((sample, index) => (
                    <ItemCard
                        key={`${sample.number}-${index}`}
                        number={sample.number}
                        h1={sample.h1}
                        h2={sample.h2}
                    />
                ))}
            </section>

            <main className="bottom_container">
                <div className="container">
                    <h2 className="projects_title">Наши самые большие проекты</h2>
                    <div className="projects">
                        {projects.map((project, index) => (
                            <article className="project_card" key={`${project.title}-${index}`}>
                                <img src="/stadium.jpg" alt="Стадион на закате" />
                                <span className="project_accent" aria-hidden="true" />
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer Title={Title} Semititle={Semititle} Year={Year} />
        </div>
    )
}
