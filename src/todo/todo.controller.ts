import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';

import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
      constructor(private service: TodoService) {}

      @Get()
      async getTodos(): Promise<any> {
            var todo = await this.service.getTodos();
            return {
                  message: "berhasil mendapatkan data todo-list", 
                  data: todo
            };
      }

      @Post()
      async createTodo(@Body('title') title: string){
            var todo = await this.service.createTodo(title);
            return {
                  message: "berhasil membuat todo-list", 
                  data: todo
            };
      }

      @Delete(':id')
      async deleteTodo(@Param('id') id: string){
            var todo = await this.service.deleteTodo(Number(id));
            return{
                  message: "berhasil menghapus todo-list",
                  data: todo
            }
      }

      @Put('/complete/:id')
      async complete(@Param('id') id: string){
            var todo = await this.service.completeTodo(Number(id))
            return{
                  message: "berhasil menyelesaikan task",
                  data: todo
            }
      }
}
