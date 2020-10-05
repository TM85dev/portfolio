export const projectsData = [
    {
        id: 0, 
        name: "Agency Site", 
        link: require("./pics/agency_site.jpg"), 
        tech: ["Vue", "Vue Router", "Vue-Animejs", "Vue-Lazyload"], 
        site: "http://tm-dev.pl/agency-site"
    },
    {
        id: 1, 
        name: "Dogs Site", 
        link: require("./pics/dogs_site.jpg"), 
        tech: ["React", "React-Router", "React-Spring"], 
        site: "http://tm-dev.pl/tresura"
    },
    {
        id: 2, 
        name: "Pairs Game", 
        link: require("./pics/pairs_game.jpg"), 
        tech: ["JQuery", "Bootstrap"], 
        site: "http://tm-dev.pl/pairs"
    },
    {
        id: 3, 
        name: "Rock-Paper-Sicisors", 
        link: require("./pics/rock_paper_sicisors.jpg"), 
        tech: ["JQuery", "JQuery-Transit", "Bootstrap"], 
        site: "http://tm-dev.pl/rps"
    },
    {
        id: 4, 
        name: "Todo Project", 
        link: require("./pics/todo.jpg"), 
        tech: ["Laravel","Bootstrap", "Vue", "Axios"], 
        site: "http://www.tm-dev.pl/todo/public/"
    },
    {
        id: 5, 
        name: "Portfolio Project", 
        link: require("./pics/portfolio.jpg"), 
        tech: ["React","React-Router", "React-Spring", "Express", "Axios"], 
        site: "http://tm-dev.pl/"
    },
    {
        id: 6,
        name: "Faktura Project",
        link: require("./pics/faktura.jpg"),
        tech: ["React", "Redux", "React-Spring"],
        site: "http://tm-dev.pl/faktura"
    }
]

export const menuDataPL = [
    {
        id:0, 
        name: "Główna", 
        icon: "flaticon-home", 
        route: "/"
    },
    {
        id:1, 
        name: "Skille", 
        icon: "flaticon-wrench", 
        route: "/skills"
    },
    {
        id:2, 
        name: "Projekty", 
        icon: "flaticon-monitor", 
        route: "/projects"
    },
    {
        id:3, 
        name: "O_Mnie", 
        icon: "flaticon-person", 
        route: "/about-me"
    },
    {
        id:4, 
        name: "Kontakt", 
        icon: "flaticon-contact", 
        route: "/contact"
    },
    {
        id:5, 
        name: "Github", 
        icon: "flaticon-github", 
        route: "https://github.com/TM85dev"
    },
    {
        id:6, 
        name: "LinkedIn", 
        icon: "flaticon-linkedin", 
        route: "https://www.linkedin.com/in/tomasz-m%C4%85czka-353b651ab/"
    }
]

export const menuDataENG = [
    {
        id:0, 
        name: "Home", 
        icon: "flaticon-home", 
        route: "/"
    },
    {
        id:1, 
        name: "Skills", 
        icon: "flaticon-wrench", 
        route: "/skills"
    },
    {
        id:2, 
        name: "Projects", 
        icon: "flaticon-monitor", 
        route: "/projects"
    },
    {
        id:3, 
        name: "About_Me", 
        icon: "flaticon-person", 
        route: "/about-me"
    },
    {
        id:4, 
        name: "Contact", 
        icon: "flaticon-contact", 
        route: "/contact"
    },
    {
        id:5, 
        name: "Github", 
        icon: "flaticon-github", 
        route: "https://github.com/TM85dev"
    },
    {
        id:6, 
        name: "LinkedIn", 
        icon: "flaticon-linkedin", 
        route: "https://www.linkedin.com/in/tomasz-m%C4%85czka-353b651ab/"
    }
]

export const skillsData = [
    {
        name: "HTML5", 
        icon: require('./icons/html.png')
    },
    {
        name: "CSS", 
        icon: require('./icons/css.png')
    },
    {
        name: "SASS", 
        icon: require('./icons/scss.png')
    },
    {
        name: "JS (ES6)", 
        icon: require('./icons/js.png')
    },
    {
        name: "React", 
        icon: require('./icons/react.png')
    },
    {
        name: "Vue", 
        icon: require('./icons/vue.png')
    },
    {
        name: "Git", 
        icon: require('./icons/git.png')
    },
    {
        name: "Github", 
        icon: require('./icons/github.png')
    },
    {
        name: "Redux", 
        icon: require('./icons/redux.png')
    },
    {
        name: "NPM", 
        icon: require('./icons/npm.png')
    },
    {
        name: "Corel", 
        icon: require('./icons/corel.png')
    },
    {
        name: "Linux", 
        icon: require('./icons/linux.png')
    },
    {
        name: "JQuery", 
        icon: require('./icons/jquery.png')
    },
    {
        name: "Bootstrap", 
        icon: require('./icons/bootstrap.png')
    },
    {
        name: "express", 
        icon: require('./icons/express.png')
    },
    {
        name: "mongodb", 
        icon: require('./icons/mongodb.png')
    },
    {
        name: "Animejs", 
        icon: require('./icons/animejs.png')
    },
    {
        name: "PHP", 
        icon: require('./icons/php.png')
    },
    {
        name: "Laravel", 
        icon: require('./icons/laravel.png')
    },
    {
        name: "Mariadb", 
        icon: require('./icons/mariadb.png')
    },
    {
        name: "wordpress", 
        icon: require('./icons/wordpress.png')
    },
]

export const infoDataPL = {
    line1: "Cześć, jestem Tomasz Mączka.",
    line2: "Przez kilka lat pracowałem dla agencji reklamowych. Zajmowałem się:",
    liA1: "tworzeniem projektów graficznych zarówno na potrzeby komputerów jak i przygotowaniem do druku,",
    liA2: "projektowaniem plakatów, wizytówek,",
    liA3: "drukowaniem,",
    liA4: "tworzeniem prostych stron internetowych,",
    liA5: "SEO dla małych i mikro firm,",
    liA6: "tworzeniem internetowych kampanii reklamowych,",
    liA7: "wgrywaniem witryn i przechowywaniem ich na serwerze.",
    line3: "Pracowałem również w firmie hostingowej. Do moich obowiązków należało:",
    liB1: "obsługa klienta,",
    liB2: "migracja stron internetowych",
    liB3: "pomoc i zarządzanie kontami klientów po stronie serwera (direct admin, isp config).",
    line4: "Od ponad pół roku uczę się najnowszych technologii, w szczególności opartych o javascript.",
    line5: "Moim celem jest dalszy rozwój, pogłębianie i przyswajanie najnowszych trendów w technologiach programowania takich jak javascript. W szczególności stack MERN.",
    line6: "W wolnej chwili lubię odpoczywać uprawiając sport (biegi, rower, squash, siłownia), podróżując, ucząc się czegoś nowego o programowaniu i języku japońskim."
}
export const infoDataENG = {
    line1: "Hello, I'm Tomasz Mączka.",
    line2: "I worked for an advertising agency for several years. I dealt with:",
    liA1: "creating graphic design for both computers and printing needs,",
    liA2: "esigning posters, business cards,",
    liA3: "print,",
    liA4: "creating simple websites,",
    liA5: "SEO for small and micro companies,",
    liA6: "creating internet advertising campaigns,",
    liA7: "uploading sites and keeping them on the server.",
    line3: "I also worked in hosting company. My duties included:",
    liB1: "customer service,",
    liB2: "website migration,",
    liB3: "help and management of client accounts from the server side (direct admin, isp config).",
    line4: "For over half a year I have been learning the latest technologies, in particular based on javascript.",
    line5: "My goal is to further develop, deepen and assimilate the latest trends in programming technologies like javascript. In particular, the MERN stack.",
    line6: "After hours, I like to relax doing sports (running, bike, squash, gym), traveling, learning something new about programming and the Japanese language."
}