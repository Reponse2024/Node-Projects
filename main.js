const {Client}=require('pg')
const con=new Client ({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: 'Reponse@postgre',
    database: 'Modules'
})
con.connect().then(()=>console.log("connected"))
con.query('select * from students', (err, res)=>{
    if(!err){
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
    })