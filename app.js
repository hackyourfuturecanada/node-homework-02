let express = require('express')
let app = express()

let socks = [
    { type: 'formal', title: 'formal option 1', description :'', image: ''},
    { type: 'formal', title: 'formal option 2', description :'', image: ''},
    { type: 'formal', title: 'formal option 3', description :'', image: ''},
    { type: 'formal', title: 'formal option 4', description :'', image: ''},
    { type: 'informal', title: 'informal option 1', description :'', image: ''},
    { type: 'informal', title: 'informal option 2', description :'', image: ''},
    { type: 'informal', title: 'informal option 3', description :'', image: ''},
    { type: 'informal', title: 'informal option 4', description :'', image: ''},
]

let shoes = [
    { type: 'formal', title: 'formal option 1', description :'', image: ''},
    { type: 'formal', title: 'formal option 2', description :'', image: ''},
    { type: 'formal', title: 'formal option 3', description :'', image: ''},
    { type: 'formal', title: 'formal option 4', description :'', image: ''},
    { type: 'informal', title: 'informal option 1', description :'', image: ''},
    { type: 'informal', title: 'informal option 2', description :'', image: ''},
    { type: 'informal', title: 'informal option 3', description :'', image: ''},
    { type: 'informal', title: 'informal option 4', description :'', image: ''},
]

app.get('/', (req, res) => {
    res.send(`
    <ul>
        <li><a href="./socks">socks</a></li>
        <li><a href="./shoes">shoes</a></li>
    </ul>
    `)
})


app.get('/socks', (req, res) => {
    let options
    if(req.query.type === "formal"){
        options = socks.filter(x => x.type === "formal")
    }else if(req.query.type === "informal"){
        options = socks.filter(x => x.type === "informal")
    }else{
        options = socks
    }

    res.send({ section : 'socks', options: options})
})

app.get('/shoes', (req, res) => {
    let options
    if(req.query.type === "formal"){
        options = shoes.filter(x => x.type === "formal")
    }else if(req.query.type === "informal"){
        options = shoes.filter(x => x.type === "informal")
    }else{
        options = shoes
    }

    res.send({ section : 'shoes', options: options})
})



app.listen(3000, () => console.log('server work on port 3000'));