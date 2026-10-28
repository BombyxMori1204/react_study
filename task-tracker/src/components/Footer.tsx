type FooterProps = {
    Title: string,
    Semititle: string,
    Year: number,
}

export default function Footer({ Title, Semititle, Year }: FooterProps){
    return <>
    <section className="footer_upper">
        <div className="container footter_upper_container">
            <div className="footer_text_upper">
                <p className="footer_title">{Title}</p>
                <p className="footer_semititle">{Semititle}</p>
            </div>
            <button className="footer_button" type="button">Ваш Запрос</button>
        </div>
    </section>
    <div className="footer_down">
        <div className="container footter_down_container">
            <div className="footer_text_down">
                <p className="ordinary_text">© {Year} Строительная компания</p>
                <p className="ordinary_text">Разработано лучшей студей</p>
            </div>
        </div>
    </div>
    </>
}