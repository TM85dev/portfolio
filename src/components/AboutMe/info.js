import React, { useContext } from 'react'
import { LangContext } from '../../store'

function Info() {
    const [toggleLang] = useContext(LangContext)
    const data = {
        line1: toggleLang ? "Cześć, nazywam się Tomasz Mączka." : "Hello, I'm Tomasz Mączka.",
        line2: toggleLang ? "Przez kilka lat pracowałem dla agencji reklamowej. Zajmowałem się:" : "I worked for an advertising agency for several years. I dealt with:",
        liA1: toggleLang ? "tworzeniem projektów graficznych zarówno na potrzeby komputerów jak i przygotowaniem do druku," : "creating graphic design for both computers and printing needs,",
        liA2: toggleLang ? "projektowanie plakatów, wizytówek," : "esigning posters, business cards,",
        liA3: toggleLang ? "drukowaniem," : "print,",
        liA4: toggleLang ? "tworzeniem prostych stron internetowych," : "creating simple websites,",
        liA5: toggleLang ? "SEO dla małych i mikro firm," : "SEO for small and micro companies,",
        liA6: toggleLang ? "tworzeniem internetowych kampanii reklamowych," : "creating internet advertising campaigns,",
        liA7: toggleLang ? "wgrywaniem witryn i przechowywaniem ich na serwerze." : "uploading sites and keeping them on the server.",
        line3: toggleLang ? "Pracowałem również w firmie hostingowej. Do moich obowiązków należało:" : "I also worked in hosting company. My duties included:",
        liB1: toggleLang ? "obsługa klienta," : "customer service,",
        liB2: toggleLang ? "migracja stron internetowych" : "website migration,",
        liB3: toggleLang ? "pomoc i zarządzanie kontami klientów po stronie serwera (direct admin)." : "help and management of client accounts from the server side (direct admin).",
        line4: toggleLang ? "Od ponad pół roku uczę się najnowszych technologii, w szczególności opartych o javascript." : "For over half a year I have been learning the latest technologies, in particular based on javascript.",
        line5: toggleLang ? "Moim celem jest dalszy rozwój, pogłębianie i przyswajanie najnowszych trendów w technologiach programowania i javascript. W szczególności stack MERN." : "My goal is to further develop, deepen and assimilate the latest trends in programming and javascript technologies. In particular, the MERN stack.",
        line6: toggleLang ? "W wolnej chwili lubię odpoczywać uprawiając sport (biegi, rower, squash, siłownia), podróżując, ucząc się czegoś nowego o programowaniu i języku japońskim." : "After hours, I like to relax doing sports (running, bike, squash, gym), traveling, learning something new about programming and the Japanese language."
    }
    return(
        <>
        <span><strong>{data.line1.slice(0,1)}</strong>{data.line1.slice(1)}</span>
        {data.line2} 
        <ul>
            <li>{data.liA1}</li>
            <li>{data.liA2}</li>
            <li>{data.liA3}</li>
            <li>{data.liA4}</li>
            <li>{data.liA5}</li>
            <li>{data.liA6}</li>
            <li>{data.liA7}</li>
        </ul>
        {data.line3}
        <ul>
            <li>{data.liB1}</li>
            <li>{data.liB2}</li>
            <li>{data.liB3}</li>
        </ul>
        {data.line4}<br/>
        {data.line5}<br/>
        <hr/>
        {data.line6}
        </>
    )
}

export default Info