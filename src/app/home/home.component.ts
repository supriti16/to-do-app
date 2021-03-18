import { Component, OnInit } from '@angular/core';

import { Task, User } from '@app/_models';
import { AccountService } from '@app/_services';

import { Router } from '@angular/router';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    user: User;
 Tasks :Array<Task>=[];
 allCompletedTasksButtonClick:boolean=false;
 allCompletedTaskList:Array<any>=[];
    public newTask;
    public isTaskCompleted;
    isTaskListEmpty:boolean;
    
    
  


    constructor(private accountService: AccountService,private router:Router) {
        this.user = this.accountService.userValue;
    }
    ngOnInit(): void {
        this.newTask='';
        this.isTaskCompleted='';
        
    }
    public addToList() { 
        
      if ((this.newTask == '' && this.isTaskCompleted=='')|| this.isTaskCompleted=='' ||
      this.newTask == '') {
          alert("Fill both the values to create task!") 
      } 
      else { 
          debugger;
          this.Tasks.push({taskname:this.newTask,status:this.isTaskCompleted})
         
         
          this.newTask = ''; 
          this.isTaskCompleted = '';
      }
      
  } 

 
  public deleteTask(index) { 
    
      this.Tasks.splice(index, 1); 
      alert("Task deleted successfully!")
  } 
  updateTask(value,index){
      debugger;
    this.newTask=value.taskname;
    this.isTaskCompleted=value.status;
    this.Tasks.splice(index,1);
    
  }
  allTasks(){
    this.allCompletedTasksButtonClick=false;
  }
  allCompletedTask(){
      debugger;
      this.allCompletedTasksButtonClick=true;
      this.allCompletedTaskList=this.Tasks.filter(x=>x.status=='Completed');
  }

   
         
} 
 
