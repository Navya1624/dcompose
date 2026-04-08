import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";

const app=express();
const prismaClient = new PrismaClient();
app.get("/",async(req,res)=>{
    
    const data = await prismaClient.user.findMany();
    res.json({message:"get end point"})
})

app.post("/",async(req,res)=>{
    await prismaClient.user.create({
        data: {
            email: Math.random().toString() + "@example.com",
            name: "User" + Math.random().toString()
        }
    })
    res.json({message:"post end point"});
})
app.listen(3000);