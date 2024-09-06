function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    
let campoPesquisa = document.getElementById
("campo-pesquisa").value

    if(campoPesquisa == ""){
        section.innerHTML = "<p>Desculpe, nada foi encontrado. Você precisa digitar o nome do país!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let capital = "";
    let paisagemMaisFamosa = "";
    let moeda = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        capital = dado.capital.toLocaleLowerCase()
        paisagemMaisFamosa = dado.paisagemMaisFamosa.toLocaleLowerCase()
        moeda = dado.moeda.toLocaleLowerCase()

        if(titulo.includes(campoPesquisa)||
        descricao.includes(campoPesquisa) ||
        capital.includes(campoPesquisa) ||
        paisagemMaisFamosa.includes(campoPesquisa) ||
        moeda.includes(campoPesquisa)){
        // Constrói o HTML para cada resultado, incluindo título, descrição e link
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <p class="descricao-meta">${dado.capital}</p>
            <p class="descricao-meta">${dado.paisagemMaisFamosa}</p>
            <p class="descricao-meta">${dado.moeda}</p>
            <a href=${dado.link} target="_blank">
                Mais informações
            </a>
        </div>`
        }
     
    }

    if (!resultados) {
        resultados = "<p>Desculpe, nada foi encontrado.</p>"
    }

    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
}

