
//declaração de variáveis
let itemsCarrinho =[]
let todosProdutos = []
let URL = "https://raw.githubusercontent.com/MarcioAlexandreWork/API-minhas--faculdade-/refs/heads/main/api.json" //declarando uma variada para armazenar a API
let inserirProdutos = document.getElementById('cards-produtos') //inserir as informações em um 
let inserirProdutosCarrinho = getElementById('carrinho-produtos')




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
                    <a class="colocar-carrinho" href="#" onclick="carrinho()">Colocar no carrinho</a>
                </div>    
            </div>
        </div>
    </li>
    `;
})
}

//${}


function carrinho(todosProdutos){
    let quantidadeProdutos = document.getElementById('qntdade')
        todosProdutos.at(produto =>{
            if(produto in itemsCarrinho){
                console.log('Produto já no carrinho')
            }
            else{
                itemsCarrinho.push(produto)
                inserirProdutosCarrinho.innerHTML+=
                `
                <li class="produto-carrinho">
                    <div>
                        <img src="${produto.img}" alt="prdto" class="img-carrinho">
                        <a href="#" class="remover">Remover do Carrinho</a>
                        <div><h5>${produto.prdt}</h5></div>
                        <div style="float: left;">
                            <div style="display: block;">
                                <div class="qnt-carrinho" style="background-color:blue">
                                    <button>-</button>
                                    <span id='qntdade'>1</span>
                                    <button>+</button>
                                </div>
                                <span>Total: ${produto.preco*quantidadeProdutos}</span>
                            </div>   
                        </div> 
                    </div>
                </li>
                `
            }


        })

    }

pegarOsProdutosPorAPI()