const express = require("express")
const server = express()

//pegar o banco de dados

const db = require("./database/db")
//configura a pasta publica
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

//utilizando template engienner
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
//req: requisição
//res: resposta

server.get("/", (req, res ) => {
    return res.render("index.html", { title: "Um título"})
})

server.get("/create-point", (req, res ) => {

    //req.query: strings dados na url

    return res.render("create-point.html",)
})

server.post("/savepoint", (req, res) => {
    //req.body: corpo do form
    console.log(req.body)

    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
]

function afterInsertData(err) {
    if(err) {
        return console.log(err)
    }


    console.log("Cadastrado com Sucesso")
    console.log(this)

    return res.send("create-point.html",  { saved: true})
}

  

    db.run(query, values, afterInsertData)

       //consultar os dados da tabela

    
    
})

server.get("/search-results", (req, res ) => {


    const search = req.query.search

    if(search == ""){
        //pesquisa vazia

            //mostrar a pag html com os dados do banco de dados
            return res.render("search-results.html", { total: 0})
    }


    //pegar os dados do banco de dados

       db.all(`SELECT * FROM places WHERE city LIKE  '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length
        console.log("Aqui estão seus registros:")
        console.log(rows)

            //mostrar a pag html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total})
    })

})


//ligar o servidor
server.listen(3001)