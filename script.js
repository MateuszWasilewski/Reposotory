/*function hello(imie)
        {
            console.log("Hello there General", imie);
            return imie
        }
        function hello2()
        {
            console.log(arguments);
        }
        let tekst= hello("Kenobi");
        console.log(tekst);
        hello2(5, "drzewo");*/

        // let tablica=[1,2,3,4];
        // let objekt = { imie:"Mateusz", age:16}

        // for(let i=0;i<tablica.length;i++)
        // {
        //     console.log(tablica[i]);
        // }
        // for(i in tablica)
        // {
        //     console.log(tablica[i]);
        // }
        // for (i in objekt)
        // {
        //     console.log(i object[i]);
        // }

        // for(i of tablica)
        // {
        //     console.log(i);
        // }

        // function onButtonClicked()
        // {
        //     let name=prompt("Type your name");
        //     alert(name);
        //     // console.log("Clicked");
        // }
        // const greeting=document.querySelector(".greeting");
        // greeting.addEventListener("click", onButtonClicked);
        
        let x=false;
        function color()
        {
            if(x==true)
            {
                document.body.style.backgroundColor ="Cyan";
            }
            else
            {
                document.body.style.backgroundColor="Gray";
            }
            x=!x;
        }
        
