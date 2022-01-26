function carregar() {
  const msg = document.querySelector("div#msg");
  const imagem = document.querySelector("div#imagem");
  const data = new Date();
  const hora = data.getHours();
  const fundo = document.querySelector("body#fundo");
  const fundosection = document.querySelector("section#fundo-section");
  const imagemManha = "style/manha.jpg";
  const imagemTarde = "style/tarde.jpg";
  const imagemNoite = "style/noite.jpg";

  msg.innerHTML = `<strong> Agora são ${hora} horas. </strong>`;
  if (hora >= 5 && hora < 12) {
    imagem.style.backgroundImage = `url(${imagemManha})`;
    fundo.style.backgroundColor = "#FCD580";
    fundosection.style.backgroundColor = "#BC8B12";
  } else if (hora >= 12 && hora < 18) {
    imagem.style.backgroundImage = `url(${imagemTarde})`;
    fundo.style.backgroundColor = "#FC8352";
    fundosection.style.backgroundColor = "#FBB869";
  } else {
    imagem.style.backgroundImage = `url(${imagemNoite})`;
    fundo.style.backgroundColor = "#042653";
    fundosection.style.backgroundColor = "#3483DF";
  }
}
