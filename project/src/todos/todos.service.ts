import { Dependencies, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

@Injectable()
@Dependencies(getRepositoryToken(Todo))
export class TodosService {
  todoRepository: any;
  constructor(todoRepository: Todo) {
    this.todoRepository = todoRepository;
  }

  async create(createTodoDto: CreateTodoDto) {
    const todo = new Todo();
    todo.Description = createTodoDto.Description;
    todo.Deadline = createTodoDto.Deadline;
    todo.Status = createTodoDto.Status;

    this.todoRepository.save(todo);
    return `${todo} + '\n' + Cell updated successfully`;
  }

  findAll() {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    try {
      return this.todoRepository.findOne({
        where: { id }, // Specify the selection condition
      });
    } catch (error) {
      throw new Error('ID not found');
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository
      .createQueryBuilder()
      .update(Todo)
      .set({
        Description: updateTodoDto.Description,
        Deadline: updateTodoDto.Deadline,
        Status: updateTodoDto.Status,
      })
      .where('id = :id', { id })
      .execute();
  }

  async remove(id: number) {
    return await this.todoRepository
      .createQueryBuilder()
      .delete()
      .from(Todo)
      .where('id = :id', { id })
      .execute();
  }
}
