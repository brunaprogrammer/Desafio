var div = document.querySelector(".popup");

var span = document.querySelector(".carrinho__cont");

var contador = 1;
 
 function adicionar(){
    
    div.style.display = "block";
       
        contador ++

        span.textContent = contador;
    
    console.log(contador)

    esconderPopUp();

}

function esconderPopUp (){
    setTimeout(function(){div.style.display="none"},3000)
}



function alteraQuantidadeExtra (elemento, aumenta){

    var spanQtd = elemento.parentElement.querySelector(".entrada");
    var valor = Number(spanQtd.textContent);

    if (aumenta){
        valor++;;
    } else{
        if(valor>0){
            valor--;
        }
    }

    if (valor == 0){
        elemento.parentElement.querySelector(".soma").classList.add("item__vazio")
        elemento.parentElement.classList.remove("adicionado")
        elemento.parentElement.querySelector(".subtracao").style.display ="none"
        elemento.parentElement.querySelector(".customizacao__item__quantidade--entrada").style.display ="none"
    } else{
        elemento.parentElement.querySelector(".soma").classList.remove("item__vazio")
        elemento.parentElement.classList.add("adicionado")
        elemento.parentElement.querySelector(".subtracao").style.display ="block"
        elemento.parentElement.querySelector(".customizacao__item__quantidade--entrada").style.display ="block"
    }

    spanQtd.textContent = valor.toString();
}
//não deu tempo de fazer até 8 ingredientes



function alteraQuantidadeItem (elemento, aumenta){

    var spanQtd = elemento.parentElement.querySelector(".entrada");
    var valor = Number(spanQtd.textContent);

    if (aumenta){
        valor++;;
    } else{
        if(valor>1){
            valor--;
        }
    }

    spanQtd.textContent = valor.toString();
}

//Aqui foi até onde eu consegui pesquisar e entender de rest api e endpoint:


function carregarItem(){
    //retorno do endpoint
    //var item = '[{"id":"1","createdAt":"2021-04-14T04:31:19.167Z","nm_product":"Oferta Picanha Cheddar Bacon","description":"Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim","vl_price":34.95,"vl_discount":31.99,"url_image":"http://teamsoft.com.br/test-frontend/picanha_cheddar_bacon.png","ingredients":[{"group":"Ingredientes Extras","max_itens":8,"type":"number","itens":[{"id":1,"nm_item":"Queijo Cheddar","vl_item":4.99},{"id":2,"nm_item":"Cebola Crispy","vl_item":1.5},{"id":3,"nm_item":"Molho Cheddar","vl_item":3.5},{"id":4,"nm_item":"Molho de Picanha","vl_item":3.5}]},{"group":"Precisa de Talher?","max_itens":8,"type":"boolean","itens":[{"id":5,"nm_item":"Queijo Cheddar","vl_item":0},{"id":6,"nm_item":"Cebola Crispy","vl_item":0}]}]}]';

    fetch("https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products")
    .then((resp) => resp.json())
    .then(function(data) {

        //parse para objeto
        //itemObj = JSON.parse(item);

        //console.log(itemObj);

        //preenchimento da tela
        document.querySelector(".pedido__oferta").textContent = data[0].nm_product;
        document.querySelector(".pedido__descricao").textContent = data[0].description;

        /*var htmlTemp = "";

        //inicio da construcao dos ingredientes dinamicamente
        for(var i=0;i<itemObj[0].ingredients.length; i++){

            if (i==0){
                htmlTemp+= '<div class="customizacao__primeiro"><div class="customizacao__primeiro__titulo"><p>'+ itemObj[0].ingredients[i].group +'</p></div><div class="customizacao__primeiro__descricao"><p>Até '+ itemObj[0].ingredients[i].max_itens  +' ingredientes</p></div></div>';
            }
            for(var a=0;a<itemObj[0].ingredients[i].itens.length; a++){

                console.log(itemObj[0].ingredients[i].itens[a].nm_item)
            }
        }
        document.querySelector(".frameinterno").insertAdjacentHTML("beforebeginhtmlTemp);*/

    })
    .catch(function(error) {
        console.log(error);
    });
    
}

carregarItem();



