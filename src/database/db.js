//importar a depedencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//iniciar objeto que irá fazer operações no bd
const db = new sqlite3.Database("./src/database/database.db")



module.exports = db
//utilizar um obj de bancos de dados, para nossas funções
// db.serialize(() => {

    //com comandos SQL eu vou :

    //criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "http://localhost:3001/assets/Imagem-2.png",
    //     "Papersider",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }


    //     console.log("Cadastrado com Sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)

    //    //consultar os dados da tabela

    //    db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros:")
    //     console.log(rows)
    // })


    //deletar um dado da tabela

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado")
    // })

 

    
// })