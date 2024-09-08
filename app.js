function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
      return 
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let título = "";
  let descrição = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
      info = dado.info.toLowerCase()
      link = dado.link.toLowerCase()
      descrição = dado.descrição.toLowerCase()
      tags = dado.tags.toLowerCase()
      // se titulo includes campoPesquisa
      if (título.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          // cria um novo elemento
          //cria um novo elemento
        resultados += `<div class="item-resultado">

        <h2>

          <a href="${dado.info}" target="_blank">"${dado.título}"</a>

        </h2>

        <p class="descrição">"${dado.descrição}"</p>

        <a href="${dado.link}" target="_blank">Clipe Oficial</a>

        </div>`;

      }

      
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;

}
