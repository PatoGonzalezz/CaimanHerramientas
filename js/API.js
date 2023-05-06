fetch("https://my-json-server.typicode.com/PatoGonzalezz/patoJson/productos")
.then(res=>res.json())
.then (response=>{
    console.log(response)
})