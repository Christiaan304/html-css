botao = document.querySelector(`#gotop`)

window.onscroll = () => scrollFunction()

let scrollFunction = () => 
{
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) 
  {
    botao.style.display = "block"
  } 
  else 
  {
    botao.style.display = "none"
  }
}

let topFunction = () => 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}