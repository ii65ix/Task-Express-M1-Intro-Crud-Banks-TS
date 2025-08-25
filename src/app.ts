import { accounts } from './accounts';
import express from 'express';

const app = express()
app.use(express.json());


app.get("/accounts/all", (req, res) => {
  res.send({
    accounts
  });
});
app.post("/accounts", (req,res)=>{
  const user = accounts.find((x)=> x.id === req.body)
  if (user){
    res.status(400).send("user is exist")
  }
  accounts.push(req.body)
  res.status(201).send("created")

 
})
app.delete("/accounts/:id" , (req,res)=>{
  const findaccounts = accounts.findIndex((x )=> x.id ===+ req.params.id )
  if (findaccounts == -1){
    res.status(400).send("account not found")
    return
  }
  accounts.splice(findaccounts)
  res.status(200).send("deleted sucessfully")


})




app.listen(8000, () => {
  console.log("lissing in port 8000");
});

