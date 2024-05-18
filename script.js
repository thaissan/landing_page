// @ts-nocheck
let sobre = document.querySelector("#sobre")

async function getApiGithub() {
    try {
      const dadosPerfil = await fetch("https://api.github.com/users/thaissan")
      const perfil = await dadosPerfil.json()
  
      let conteudo = `
        <img src="${perfil.avatar_url}" alt="Foto de perfil ${perfil.name}." class="sobre">

        <div class="info-sobre">
            <h2>Quem sou eu?</h2>
            <p>Lorem ipsum dolor sit amet. In fugiat fugit sit excepturi 
            consequatur cum sequi vero qui vero voluptatem et unde dicta 
            aut consequatur adipisci ut Quis ${perfil.bio}</p>

            <div class="github">
                <a href="${perfil.html_url}" target="_blank">GitHub</a>
                <p>${perfil.followers} Seguidores</p>
                <p>${perfil.public_repos} Repositórios</p>
            </div>
        </div>
      `
      sobre.innerHTML += conteudo
    } catch (error) {
      console.log(error)
    }
}

getApiGithub()