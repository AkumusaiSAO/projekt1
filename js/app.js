document.addEventListener("DOMContentLoaded", function() {

  numberMove = 0 ;
  firstMove = '<img class="image" src="/img/czarnyX.png" />';
  nameField = 'x';
  p=[];
  wygrana=[];
  statystykax = 0 ;
  statystykao = 0 ;
  tabelka.addEventListener("click",gra);
  function resetGame(e){
    for(x=1;x<10;x++){
      document.getElementById("p"+x).innerHTML = "";
    }
    tabelka.addEventListener("click",gra)
    document.getElementById("reset").disabled = true;
    document.getElementById("result").innerHTML = "";
    numberMove = 0;
  }
 
  
  function gra(e){
    numberMove++;
    console.log (numberMove);
    targetId = document.getElementById(e.target.id);
    if (targetId.innerHTML == "") {
      targetId.innerHTML = firstMove;
      targetId.setAttribute("name",nameField);
   
    if(firstMove == '<img class="image" src="/img/czarnyX.png" />'){
      firstMove = '<img class="image" src="/img/czarneO.png" />';
      nameField = "o"
    }
    else {
      firstMove = '<img class="image" src="/img/czarnyX.png" />';
      nameField = "x"
    }}
    reset = document.getElementById("reset");
    reset.addEventListener("click",resetGame)
    wygrana = [] ;



  for(x=1;x<10;x++){
    p[x]=document.getElementById("p"+x).getAttribute("name");
  }
  //p1=document.getElementById("p1").innerHTML;
  //p2=document.getElementById("p2").innerHTML;
  //p3=document.getElementById("p3").innerHTML;
  //p4=document.getElementById("p4").innerHTML;
  //p5=document.getElementById("p5").innerHTML;
  //p6=document.getElementById("p6").innerHTML;
  //p7=document.getElementById("p7").innerHTML;
  //p8=document.getElementById("p8").innerHTML;
  //p9=document.getElementById("p9").innerHTML;
  // wygrana1=p[1]+p[2]+p[3];
  // wygrana2=p[4]+p[5]+p[6];
  // wygrana3=p[7]+p[8]+p[9];
  // wygrana4=p[1]+p[4]+p[7];
  // wygrana5=p[2]+p[5]+p[8];
  // wygrana6=p[3]+p[6]+p[9];
  // wygrana7=p[1]+p[5]+p[9];
  // wygrana8=p[3]+p[5]+p[7];
  
  function getElementP(elem,what) {
      document.getElementById("p"+elem).innerHTML = '<img class="image" src="/img/zielony'+what+'.png" >'
    }
    //funkcja pozwala na przypisanie koloru do pola o danej warto??ci i ustaleniu symbolu wygranego
    function getResult(info) {
      document.getElementById("result").innerHTML = info;
    }
    //funkcja na zw??rcenie rezultatu gry
    function wygranaGry(x,kto,par1,par2,par3){
        //x - liczba po????dkowa, kto - podajemy trzy znaki symboli w postaci xxx lub ooo,
        //par1 - pierwsze pole z element??w kt??re tworz?? wygran??, par2 - drugie z element??w -||-, par3 trzecie z element??w -||-,
      wygrana[x]=p[par1] + p[par2] + p[par3];
      //wygrana x - definiuje konfiguracj?? wygranej
      console.log(wygrana[x]);
        if (wygrana[x]== kto){
        //czy konfiguracja wygrana zgadza si?? z symbolem
          if (kto == "xxx") {
          //je??li konfiguracja zgadza si?? z symbolem to koloruj
            getElementP(par1,"x");
            getElementP(par2,"x");
            getElementP(par3,"x");
            getResult("Po wielkich bojach wygra??y krzy??ki");
            reset.disabled = false ;
            statystykax++;
            document.getElementById("statystyki").innerHTML = "Krzy??yki "+statystykax;
            
        }
        if (kto == "ooo") {
          //je??li konfiguracja zgadza si?? z symbolem to koloruj
            getElementP(par1,"o");
            getElementP(par2,"o");
            getElementP(par3,"o");
            getResult("Po wielkich bojach wygra??y k????ka")
            reset.disabled = false ;
            statystykao++;
            document.getElementById("statystyki").innerHTML = "K????ka "+ statystykao;
            
        }
       for(x=1 ; x<10 ; x++){
         document.getElementById("p"+x).removeAttribute("name");
       }
        }
        
    }

    // document.getElementById("statystyki").innerHTML = "Krzyzyki" + statystyki
    // document.getElementById("statystykao").innerHTML = "Kola" + statystyki

  wynik = [];
  wynik[1] = 'xxx';
  wynik[2] = 'ooo';
  
  for(x=1;x<3;x++){
    wygranaGry(1,wynik[x],1,2,3);
      wygranaGry(2,wynik[x],4,5,6);
      wygranaGry(3,wynik[x],7,8,9);
      wygranaGry(4,wynik[x],1,4,7);
      wygranaGry(5,wynik[x],2,5,8);
      wygranaGry(6,wynik[x],3,6,9);
      wygranaGry(7,wynik[x],1,5,9);
      wygranaGry(8,wynik[x],3,5,7);
  }
  
  if(numberMove==9){
    reset.disabled = false;
  }

  // if(wygrana1=="xxx"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=1;x<4;x++){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
  //   }
  // document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y krzy??yki";
  // }
  
  // if(wygrana2=="xxx"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=4;x<7;x++){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y krzy??yki";
  // }
  
  
  // if(wygrana3=="xxx"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=7;x<10;x++){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y krzy??yki";
  // }
  
  // if(wygrana4=="xxx"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=1;x<8;x+=3){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y krzy??yki";
  // }
  
  // if(wygrana5=="xxx"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=2;x<9;x+=3){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y krzy??yki";
  // }
  
  // if(wygrana6=="xxx"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=3;x<10;x+=3){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y krzy??yki";
  // }
  
  // if(wygrana7=="xxx"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=1;x<10;x+=4){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y krzy??yki";
  // }
  
  // if(wygrana8=="xxx"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=3;x<8;x+=2){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">x</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y krzy??yki";
  // } 
  
  // if(wygrana1=="ooo"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=1;x<4;x++){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y k????ka";
  // }
  
  // if(wygrana2=="ooo"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=4;x<7;x++){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y k????ka";
  // }
  
  // if(wygrana3=="ooo"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=7;x<10;x++){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y k????ka";
  // }
  
  // if(wygrana4=="ooo"){
  //   console.log ("wygra??es");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=1;x<8;x+=3){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y k????ka";
  // }
  
  // if(wygrana5=="ooo"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=2;x<9;x+=3){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y k????ka";
  // }
  
  // if(wygrana6=="ooo"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=3;x<10;x+=3){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y k????ka";
  // }
  
  // if(wygrana7=="ooo"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=1;x<10;x+=4){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y k????ka";
  // }
  
  // if(wygrana8=="ooo"){
  //   console.log ("wygra??e??");
  //   reset.disabled = false ;
  //   tabelka.removeEventListener("click",gra)
  //   for(x=3;x<8;x+=2){
  //     document.getElementById("p"+x).innerHTML = '<div style="color:#00cc00">o</div>';
  //   }
  //   document.getElementById("result").innerHTML = "Po wielkich bojach wygra??y k????ka";
  // } 
  
  }
  
  
  
  
  });