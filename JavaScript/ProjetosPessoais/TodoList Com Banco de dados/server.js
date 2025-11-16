import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
const prisma = new PrismaClient()
const app = express()
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type']
}))
app.use(express.json())

app.post('/user', async (req,res) => {
    try {
    const person = await prisma.user.create({
        data: {
            task: req.body.task
        }
    })
    res.status(201).json(person)
    console.log('usuário criado:', person) 
} catch (erro) {
    console.log('erro ao criar usuário:', erro)
    res.status(500).json({erro: 'erro ao criar usuário', details: erro.mensage})
}
})

app.put('/user/:id', async (req,res) => {
    try {
    const person = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            task: req.body.task,
            done: req.body.done
        }
    })

    res.status(201).json({mensage: 'usuário atualizado com sucesso'})
} catch (erro) {
    res.status(500).json({erro: 'erro ao atualizar usuário:'})
    console.log('erro:',erro)
}
    
})

app.get('/user', async (req,res) => {
    try {
    const person = await prisma.user.findMany()
    console.log(person)
    res.status(200).json(person)
    } catch (erro) {
        res.status(500).json({erro: 'erro ao encontrar usuários'})
        console,log(erro)
    }
})

app.delete('/user/:id', async (req,res) => {
    try{
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({mensage:'usuário deletado com sucesso'})
    } catch (erro) {
    res.status(500).json({erro: 'erro ao deletar usuário'})
    console.log(erro)
}
})









app.listen(3000)