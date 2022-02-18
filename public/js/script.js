// js vanilla

function addFocusNavItemHome(){
  document.querySelector('.nav-link').focus()
}

document.body.onload = addFocusNavItemHome

document.querySelectorAll('.nav-link').forEach(
    (el) => { el.onclick = renderSectionAjax }
)

document.querySelectorAll('.card').forEach(
    (el) => { el.onclick = renderSectionAjax }
)


//jquery

function renderSectionAjax(e){
  console.log(e.target.href)
  // $(e.target.value).on("click", (e)=> {                            
  //                       //coloca o atual nesse elemento
  
  //   $("#content-4").empty();                             //esvazia o conteudo do elemento atual
  //   $("#container-4 #content-4").load("ajax.html #content-4-blue");                        
  // });  

}
           