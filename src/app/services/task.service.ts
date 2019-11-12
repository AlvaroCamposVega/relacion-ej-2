import { Injectable } from '@angular/core';
import { Task } from '../classes/task';
import { Title } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TaskService
{
  tasks: Task[] = [];

  constructor(private storage: Storage)
  {
    this.getTasks().then(
      data => this.tasks = data != null ? data : []
    );
  }

  getTasks(): Promise<Task[]>
  {
    return this.storage.get('tasks');
  }

  getTask(id: number): Task
  {
    return this.tasks.filter(t => t.id == id)[0];
  }

  saveTask(t: Task): Promise<boolean>
  {
    if (t.id == undefined)
    {
      this.addTask(t);

    } else
    {
      this.updateTask(t);
    }

    return this.storage.set('tasks', this.tasks);
  }

  addTask(t: Task)
  {
    let id = 0;

    if (this.tasks.length > 0)
    {
      id = this.tasks[this.tasks.length - 1].id + 1;
    }

    const taskToSave = 
    {
      id: id,
      title: t.title,
      description: t.description,
      category: t.category
    }

    this.tasks.push(taskToSave);
  }

  updateTask(t: Task)
  {
    const i = this.tasks.findIndex(tAux => tAux.id == t.id);
    this.tasks.splice(i, 1, t);
  }

  deleteTask(id: number): Promise<boolean>
  {
    this.tasks = this.tasks.filter(t => t.id != id);
    
    return this.storage.set('tasks', this.tasks);
  }
}
