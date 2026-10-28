import ItemCard from "./ItemCard"

type ContentProps = {
    Title: string,
    Semititle: string,
    Year: number,
}

export default function Footer({ Title, Semititle, Year }: ContentProps){
    const adv = [
        {number: 26, h1: "ЛЕТ", h2: "на рынке"},
        {number: 67, h1: "ВЕКОВ", h2: "в теме"},
        {number: 69, h1: "ДЕКАД", h2: "тута"},
        {number: 10, h1: "РАЗ", h2: "топ 1"},
    ]
    return <>
    <div className="header_container">
        <div className="container">
            <h1></h1>
            <h3></h3>
            <div className="advantages">
                {adv.map((sample) => (
                    <ItemCard
                    key={sample.number}
                    name={sample.h1}
                    job={sample.h2}
                    />
                ))}
            </div>
        </div>
    </div>
    <div className="bottom_container">

    </div>
    </>
}