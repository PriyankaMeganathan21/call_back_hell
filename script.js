var counter = document.getElementById('counter')
setTimeout(() =>{
console.log("10")
counter.innerText=10
setTimeout(() =>{
console.log("9")
counter.innerText=9
setTimeout(() =>{
    console.log("8")
    counter.innerText=8
      setTimeout(() =>{
        console.log("7")
        counter.innerText=7
         setTimeout(() =>{
            console.log("6")
            counter.innerText=6
            setTimeout(() =>{
                console.log("5")
                counter.innerText=5
                setTimeout(() =>{
                    console.log("4")
                    counter.innerText=4
                    setTimeout(() =>{
                        console.log("3")
                        counter.innerText=3
                        setTimeout(() =>{
                            console.log("2")
                            counter.innerText=2
                            setTimeout(() =>{
                                console.log("1")
                                counter.innerText=1
                               setTimeout(() =>{
                                 console.log("Happy Independence Day")
                                 counter.innerText="Happy Independence Day"
                             },1000);
                         },1000);
                     },1000);
                 },1000);
             },1000);
         },1000);
       },1000);
    },1000);
},1000); 
},1000)
},1000)
