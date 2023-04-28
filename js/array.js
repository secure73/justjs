let autoArray = ["BMW", "Mercedes", "WV" , "TOYOTA"];
let autoUl = document.getElementById("autoUl");

/*
für jeder auto Brand in autoArray generiert ein <li> </li> und schreib Brand in <li> , dann add 
 dise <li> into autoUl .
 Notice: html datai ist array.html 
 foreach befehl hilft uns diese zweck zu errichen
*/
autoArray.forEach(item =>  {
    autoUl.innerHTML += '<li>'+item+'</li>';
});


/* 
foreach function decleration

normal  function: 
example  : 
    function normal()
    {
    ........
    }
    
    execure normal function 
    normal(); 



    apended function ist nicht wie normal function rufbar!!!

    apenned = verfolger

    foreach ist ein appened function und beantragt Action über ein Existierete Objekt.

    foreach(item in araay)  falsch!!!!


    myArray = [item1, item2 ,.....];

    myArray.foreach(Argument){
            body
    }
    foreach ist ein function und wie Jeder funktion har Argument und body

    Argument in foreach ist nur ein variable nach zu schlife

    dise variable Name ist frei zu anwenden, normaleweise wir nutzen item oder ähnliche
    dann wie jeder andere function, wir haben zugriff zur dise item in function body (Korper)

autoArray.forEach(brand =>  {
    heire goes code
});

*/

