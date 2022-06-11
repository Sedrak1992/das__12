


// const arr = ["anis",'John',"Anna","Vagi","Serdab"]

// console.log(arr.every(function(name){
//     return name.length ===  4
// }))



  const bens = document.querySelectorAll("button");
    console.log(Array.from(bens).every(function(btn){
        return btn.classList.contains("btn")
    }))



