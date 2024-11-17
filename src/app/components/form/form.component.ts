import { CommonModule } from '@angular/common';
import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {




  listaTarefas : any[] = []
  constructor() { }

  ngOnInit(): void {
    this.listaTarefas= [
      {id: 0 , nome: "TarefaExemplo" ,dataEntrega : "10/02/2012" ,concluida : false}
    ]
  }
  adicionar(tarefaNome:string,dataEntrega:string){
    if (tarefaNome.trim().length == 0 || dataEntrega.trim().length == 0){
      return;
    }

    const tarefaRepetida = this.listaTarefas.find(item => item.nome.toLowerCase() == tarefaNome.toLowerCase())
    if (!tarefaRepetida){
      this.listaTarefas.push({id: this.listaTarefas.length, nome : tarefaNome , dataEntrega : dataEntrega ,concluida : false})
    }
  }
  deletar(tarefaid: number){
    this.listaTarefas = this.listaTarefas.filter(tarefa => tarefa.id !== tarefaid);
  }
}

