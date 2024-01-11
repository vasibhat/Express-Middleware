const express = require('express')
const app = express()

app.use(logger)
app.use(auth)

app.get('/',(req,res) =>
{
    console.log('home page')
    res.send('home page')
})

app.get('/users',auth,(req,res)=>{
    console.log('users page')
    res.send('Users Page')
})

function logger(req,res,next){
    console.log('log')
    next()
}

function auth(req,res,next){
    if (req.query.admin ==='true'){
        next()
    }
    else{
        res.send('No auth')
    }
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});