import express from "express";
const Moralis = require("moralis").default;
import * as dotenv from 'dotenv'
import { listNFTsByAddress, ownersByAddress } from "./functions"
dotenv.config()

const app = express()
const port = 3000

app.get('/nfts', async (req, res) => {
    const { address } = req.query;
    const result = await listNFTsByAddress(String(address))
    res.json(result)
})

app.get('/owners', async (req, res) => {
    const { address, cursor } = req.query;
    const result = await ownersByAddress(String(address), cursor)
    res.json(result)
})

app.listen(port, async () => {
    await Moralis.start({
        apiKey: process.env.API_KEY,
      });
      
  console.log(`Listening on port ${port}`)
})


