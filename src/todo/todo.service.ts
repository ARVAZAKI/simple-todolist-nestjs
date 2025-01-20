import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
      constructor(private prismaService: PrismaService) {}

      getTodos(){
            return this.prismaService.todo.findMany();
      }

      createTodo(title: string){
            return this.prismaService.todo.create({
                  data: {
                        title: title,
                        completed: false
                  }
            })
      }

      deleteTodo(id: number){
            return this.prismaService.todo.delete({
                  where: {
                        id: id
                  }
            })
      }

      completeTodo(id: number){
            return this.prismaService.todo.update({
                  where: {
                        id: id
                  }, 
                  data:{
                        completed: true
                  }
            })
      }
}
