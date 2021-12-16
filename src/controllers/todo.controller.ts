import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const home = async (req: Request, res: Response)=>{
    let title: string = req.query.title as string;
    let done: string = req.query.done as string;
    let tasks = await Todo.findAll({
        order: [
            ['done', 'ASC']
         ]
    });

   

   

    res.render('home',{
        title,
        done,
        tasks
    });

}

export const all = async (req: Request, res:Response) => {
    const list = await Todo.findAll();
    res.json({list});
}

export const add = async (req: Request, res:Response) => {
    if(req.body.title){ //Verifica se campo title está vazio ou nao. 
        let newTodo = await Todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });

        //res.status(201).json({item: newTodo}); //201 houve inserção de dados e deu tudo certo
        
    }else{
        res.json({error: 'Dados não enviados'});
      
    }

    res.redirect('/');
}

export const update = async (req: Request, res:Response) => {
    let id: string = req.params.id;
    let todo = await Todo.findAll({where: {id}}); //primary key
    
    if(todo.length){
      
        let task = todo[0];

        if(task.done){
            task.done = false;
            await task.save();
         
        }else{
            task.done = true;
            await task.save();
            
        } 
    }
    res.redirect('/'); 
}

export const remove = async (req: Request, res:Response) => {
    let id: string = req.params.id;

    let todo = await Todo.findByPk(id);
    if(todo){
        await todo.destroy();
       
    }

    res.redirect('/');
}