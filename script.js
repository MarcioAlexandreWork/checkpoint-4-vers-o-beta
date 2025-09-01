
//declaração de variáveis
let itemsCarrinho =[]
let todosProdutos = []
let URL = "https://raw.githubusercontent.com/MarcioAlexandreWork/API-minhas--faculdade-/refs/heads/main/api.json" //declarando uma variada para armazenar a API
let inserirProdutos = document.getElementById('cards-produtos') //inserir as informações em um 
let inserirProdutosCarrinho = document.getElementById('carrinho-produtos')



//Botoões
function checar(id){


    if(document.getElementById(id).style.backgroundColor == 'rgb(31, 158, 31)'){
        document.getElementById(id).style.backgroundColor = 'rgb(202, 1, 1)'
    }
    else{
        document.getElementById(id).style.backgroundColor = 'rgb(31, 158, 31)';
    }
}

function abrirCarrinho(id){
    if (document.getElementById(id).style.visibility=='hidden'){
        document.getElementById(id).style.visibility='visible'
    }
    else{
        document.getElementById(id).style.visibility='hidden'
    }
}






//Declaraão de Funcões sobre API


    //Função assíncrona para pegar as informações dentro da API escolhida e mostrar uma mensagem de erro caso não seja possível
async function pegarOsProdutosPorAPI(){
try{
    const res = await fetch(URL)
    if (!res.ok){
        console.log('erro')
        throw new Error('Não foi possível encontrar os produtos. Erro: '+ res.statusText);
    }
    todosProdutos = await res.json();
    mostrarProdutos(todosProdutos)
}
catch(erro){
    console.log('Não foi chefe', erro)
}
}


function carrinho(nome, preco, img){
    //Percorrer o localStorage para ver se o produto já está no carrinho e storage
    for(let i=0; i<localStorage.length; i++){
            let chave = localStorage.key(i)


            if(chave===nome){
                console.log('Tá no storage')
            }
            else{
                localStorage.setItem(nome, quantidadeProdutos)
                let quantidadeProdutos = localStorage.getItem(nome)

                inserirProdutosCarrinho.innerHTML+=
                `
                <li class="produto-carrinho">
                    <div>
                        <img src="${img}" alt="prdto" class="img-carrinho">
                        <a href="#" class="remover">Remover do Carrinho</a>
                        <div><h5>${nome}</h5></div>
                        <div style="float: left;">
                            <div style="display: block;">
                                <div class="qnt-carrinho" style="background-color:blue">
                                    <button onclick="">-</button>
                                    <span id='qntdade'>${quantidadeProdutos}</span>
                                    <button onclick="">+</button>
                                </div>
                                <span >Total: ${preco*quantidadeProdutos}</span>
                            </div>   
                        </div> 
                    </div>
                </li>
                `
        }
    }
}






    //Função para aparecer os produtos na página de loja
function mostrarProdutos(todosProdutos){
    todosProdutos.forEach(produto =>{
        inserirProdutos.innerHTML+=
        `
        <li class="card-produto" id="${produto.tipo}">
            <h1 class="titulo-produto">${produto.prdt}</h1>
            <div class="compra">
                <img src="${produto.img}" alt="prdt-img" class="imgs-produto-loja">
                <div class="desc-produto">
                    <p class="">${produto.desc}</p>
                    <h4>Tipo: ${produto.tipo}</h4>
                    <div class="qnt">
                        <h3>R$ ${produto.preco}</h3>
                        <a class="colocar-carrinho" href="#" onclick="carrinho("${produto.prdt}, ${produto.preco}, ${produto.img}")">Colocar no carrinho</a>
                    </div>    
                </div>
            </div>
        </li>
        `;
    })
}

//${}
























                // `
                // <li class="produto-carrinho">
                //     <div>
                //         <img src="${produto.img}" alt="prdto" class="img-carrinho">
                //         <a href="#" class="remover">Remover do Carrinho</a>
                //         <div><h5>${produto.prdt}</h5></div>
                //         <div style="float: left;">
                //             <div style="display: block;">
                //                 <div class="qnt-carrinho" style="background-color:blue">
                //                     <button>-</button>
                //                     <span id='qntdade'>1</span>
                //                     <button>+</button>
                //                 </div>
                //                 <span>Total: ${produto.preco*quantidadeProdutos}</span>
                //             </div>   
                //         </div> 
                //     </div>
                // </li>
                // `



// function mostrarProdutos(todosProdutos){
//     todosProdutos.forEach(produto =>{
//         inserirProdutos.innerHTML+=
//         `
//         <li class="card-produto" id="${produto.tipo}">
//             <h1 class="titulo-produto">${produto.prdt}</h1>
//             <div class="compra">
//                 <img src="${produto.img}" alt="prdt-img" class="imgs-produto-loja">
//                 <div class="desc-produto">
//                     <p class="">${produto.desc}</p>
//                     <h4>Tipo: ${produto.tipo}</h4>
//                     <div class="qnt">
//                         <h3>R$ ${produto.preco}</h3>
//                         <a class="colocar-carrinho" href="#" onclick="carrinho(${produto.prdt}, ${produto.preco})">Colocar no carrinho</a>
//                     </div>    
//                 </div>
//             </div>
//         </li>
//         `;
//     })
// }





pegarOsProdutosPorAPI()
