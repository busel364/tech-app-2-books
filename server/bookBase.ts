import express from 'express';
import cors from 'cors';
import events from 'events';
import { data, dataMenu } from './data/consts';
const PORT = 5000;

const emitter = new events.EventEmitter();

const app = express();

app.use(cors());

app.get('/data',(req,res)=>{
    res.status(200).json(JSON.stringify(data));
})

app.get('/data/authors',(req,res)=>{
    res.status(200).json(JSON.stringify(data.authors));
})

app.get('/data/books',(req,res)=>{
    res.status(200).json(JSON.stringify(data.books));
})

app.get('/data/highlighted_authors',(req,res)=>{
    res.status(200).json(JSON.stringify(data.highlightedAuthors))
})

app.get('/data/highlighted_books',(req,res)=>{
    res.status(200).json(JSON.stringify(data.highlightedAuthors))
})

app.get('/dataMenu/drinks/hot_drinks',(req,res)=>{
    res.status(200).json(JSON.stringify(dataMenu.drinks.hotDrinks))
})

app.get('/dataMenu/drinks/cold_drinks',(req,res)=>{
    res.status(200).json(JSON.stringify(dataMenu.drinks.coldDrinks))
})

app.get('/dataMenu/desserts',(req,res)=>{
    res.status(200).json(JSON.stringify(dataMenu.desserts))
})

app.get('/dataMenu',(req,res)=>{
    res.status(200).json(JSON.stringify(dataMenu))
})




app.listen(PORT,()=>console.log(`server started on port ${PORT}`));