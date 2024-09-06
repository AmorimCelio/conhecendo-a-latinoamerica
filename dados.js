let dados = [
    {
        titulo: "Argentina",
        capital: "Buenos Aires",
        descricao: "Conhecida por seus vinhos, tango e estepes, a Argentina é um país com paisagens variadas, desde os Andes até a Patagônia.",
        paisagemMaisFamosa: "Cataratas de Iguazú",
        moeda: "Peso Argentino",
        link : "https://pt.wikipedia.org/wiki/Argentina"
    },
    {
        titulo: "Bolívia",
        capital: "La Paz",
        descricao: "País andino com uma rica cultura indígena e paisagens deslumbrantes, como o Salar de Uyuni.",
        paisagemMaisFamosa: "Salar de Uyuni",
        moeda: "Boliviano",
        link: "https://pt.wikipedia.org/wiki/Bolívia"
    },
    {
        titulo: "Brasil",
        capital: "Brasília",
        descricao: "O maior país da América do Sul, conhecido por sua biodiversidade, futebol e carnaval.",
        paisagemMaisFamosa: "Cristo Redentor",
        moeda: "Real",
        link: "https://pt.wikipedia.org/wiki/Brasil"
    },
    {
        titulo: "Chile",
        capital: "Santiago",
        descricao: "Conhecido por seus vinhos finos, paisagens andinas e a árida região do Atacama.",
        paisagemMaisFamosa: "Deserto do Atacama",
        moeda: "Peso chileno",
        link: "https://pt.wikipedia.org/wiki/Chile"
    },
    {
        titulo: "Colômbia",
        capital: "Bogotá",
        descricao: "Um país com rica biodiversidade, paisagens andinas e costeiras, além de uma cultura vibrante.",
        paisagemMaisFamosa: "Cartagena",
        moeda: "Peso colombiano",
        link: "https://pt.wikipedia.org/wiki/Colômbia"
    },
    {
        titulo: "Costa Rica",
        capital: "San José",
        descricao: "Um paraíso ecológico com uma grande variedade de vida selvagem e florestas tropicais.",
        paisagemMaisFamosa: "Vulcão Arenal",
        moeda: "Colón",
        link: "https://pt.wikipedia.org/wiki/Costa_Rica"
    },
    {
        titulo: "Cuba",
        capital: "Havana",
        descricao: "Uma ilha caribenha com história rica, cultura vibrante e belas praias.",
        paisagemMaisFamosa: "Varadero",
        moeda: "Peso cubano",
        link: "https://pt.wikipedia.org/wiki/Cuba"
    },
    {
        titulo: "Equador",
        capital: "Quito",
        descricao: "O Equador é um país andino com uma rica diversidade cultural e natural. Conhecido por suas Ilhas Galápagos, um arquipélago com fauna e flora únicas, o Equador oferece paisagens montanhosas, florestas tropicais e praias paradisíacas.",
        paisagemMaisFamosa: "Ilhas Galápagos",
        moeda: "Dólar Americano",
        link: "https://pt.wikipedia.org/wiki/Equador"
    },
    {
        titulo: "El Salvador",
        capital: "San Salvador",
        descricao: "El Salvador é um pequeno país da América Central, conhecido por suas belas praias, vulcões e ruínas Maias. A capital, San Salvador, é uma cidade vibrante com uma rica história.",
        paisagemMaisFamosa: "Vulcão de San Salvador",
        moeda: "Dólar Americano"
    },
    {
        titulo: "Guatemala",
        capital: "Cidade da Guatemala",
        descricao: "A Guatemala é um país da América Central conhecido por suas ruínas maias, vulcões e paisagens exuberantes.",
        paisagemMaisFamosa: "Tikal",
        moeda: "Quetzal"
    },
    {
        titulo: "Guiana",
        capital: "Georgetown",
        descricao: "A Guiana, localizada na costa norte da América do Sul, é um país com uma rica diversidade cultural e natural, com florestas tropicais e savanas.",
        paisagemMaisFamosa: "Kaieteur Falls",
        moeda: "Dólar guianense"
    },
    {
        titulo: "Haiti",
        capital: "Porto Príncipe",
        descricao: "O Haiti, primeiro país independente da América Latina, possui uma rica história e cultura. Suas praias paradisíacas e montanhas exuberantes contrastam com os desafios sociais do país.",
        paisagemMaisFamosa: "Labadee", // Uma praia privativa de um cruzeiro, muito popular
        moeda: "Gourde haitiano"
    },
    {
        titulo: "Honduras",
        capital: "Tegucigalpa",
        descricao: "Honduras é um país da América Central conhecido por suas florestas tropicais exuberantes e ruínas maias. As ilhas da Baía são um destino turístico popular.",
        paisagemMaisFamosa: "Ruínas Maias de Copán",
        moeda: "Lempira"
    },
    {
        titulo: "México",
        capital: "Cidade do México",
        descricao: "O México é um país com uma rica história e cultura, famoso por suas ruínas maias e astecas, praias paradisíacas e culinária saborosa.",
        paisagemMaisFamosa: "Chichén Itzá",
        moeda: "Peso mexicano"
    },
    {
        titulo: "Nicarágua",
        capital: "Manágua",
        descricao: "A Nicarágua é um país da América Central conhecido por suas belas praias, vulcões ativos e lagos cristalinos. Sua rica história e cultura são uma mistura de influências indígenas, espanholas e africanas.",
        paisagemMaisFamosa: "Lago Nicarágua",
        moeda: "Córdoba nicaraguense"
    },
    {
        titulo: "Paraguai",
        capital: "Assunção",
        descricao: "O Paraguai é um país sem litoral localizado no coração da América do Sul, conhecido por suas belas paisagens naturais e pela rica cultura guarani.",
        paisagemMaisFamosa: "As Missões Jesuíticas",
        moeda: "Guarani"
    },
    {
        titulo: "Peru",
        capital: "Lima",
        descricao: "O Peru é um país andino com uma rica história pré-colombiana. É famoso por Machu Picchu, uma antiga cidade inca, e pela Amazônia peruana.",
        paisagemMaisFamosa: "Machu Picchu",
        moeda: "Sol"
    },
    {
        titulo: "Peru",
        capital: "Lima",
        descricao: "O Peru é um país andino com uma rica história pré-colombiana. É famoso por Machu Picchu, uma antiga cidade inca, e pela Amazônia peruana.",
        paisagemMaisFamosa: "Machu Picchu",
        moeda: "Sol"
    },
    {
        titulo: "República Dominicana",
        capital: "Santo Domingo",
        descricao: "A República Dominicana é um país caribenho conhecido por suas belas praias, resorts de luxo e rica história. Santo Domingo, sua capital, é a cidade mais antiga das Américas.",
        paisagemMaisFamosa: "Praias de Punta Cana",
        moeda: "Peso dominicano"
    },
    {
        titulo: "Uruguai",
        capital: "Montevidéu",
        descricao: "O Uruguai é um país sul-americano conhecido por suas paisagens naturais exuberantes, vinhos de alta qualidade e futebol. Montevidéu, sua capital, é uma cidade cosmopolita com uma rica vida cultural.",
        paisagemMaisFamosa: "Praias de Punta del Este",
        moeda: "Peso uruguaio"
    },
    {
        titulo: "Venezuela",
        capital: "Caracas",
        descricao: "A Venezuela é um país sul-americano com uma grande diversidade geográfica, desde as montanhas dos Andes até as planícies do Orinoco. É famosa por suas reservas de petróleo e pela beleza natural do Salto Ángel.",
        paisagemMaisFamosa: "Salto Ángel" ,
        moeda: "Bolívar Soberano" // Nota: A situação econômica da Venezuela é complexa, e a moeda pode ter sofrido alterações.
    },
];

