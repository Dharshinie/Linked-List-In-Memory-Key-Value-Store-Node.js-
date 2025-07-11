const express = require('express');
const linkedListDb=require('./linkedList');

const app=express();

const port=4000;

app.use(express.json());

const db=new linkedListDb();

app.post('/insert',(req,res)=>{
    const {key,value}=req.body;
    console.log(`Inserting: ${key} = ${value}`);
    db.insert(key,value);
    res.send({message:"Inserted Succesfully"})
});

app.get('/get/:key',(req,res)=>{
    const key=req.params.key;
    const value=db.get(key);
    if(value!=null){
        res.send({key,value});
    }
    else{
        res.status(404);
        res.send({message:"key Not Found"});
    }
});


app.put('/update',(req,res)=>{
    const {key,value}=req.body;
    const updated = db.update(key, value);
    if (updated) {
        res.send({ message: 'Updated successfully' });
    } else {
        res.status(404).send({ message: 'Key not found' });
    }
});


app.delete('/delete/:key',(req,res)=>{
    const key=req.params.key;
    const deleted=db.delete(key);
    if(deleted){
        res.send({message:"Deleted Successfully"});
    }
    else{
        res.status(404);
        res.send({message:"key Not Found"});
    }
});

app.get('/all', (req, res) => {
    res.send(db.printAll());
});

app.get('/', (req, res) => {
  res.send('Hello World from Node.js!');
});

app.listen(port, () => {
    console.log(`In-Memory DB server running at http://localhost:${port}`);
});