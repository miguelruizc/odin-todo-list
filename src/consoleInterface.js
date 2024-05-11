import {Project} from "./project.js";
import {Todo} from "./todo.js";

export class ConsoleInterface {
    constructor(projectsArray){
        this.projects = projectsArray;
    }

    createProject(title) {
        let newProject = new Project(title);
        this.projects.push(newProject);
    }

    createTodo(projectTitle = "Default", title="Todo name", description="Description", dueDate=new Date(1111, 1, 1), priority=0, notes="Notes", isDone=false){
        let newTodo = new Todo(title, description, dueDate, priority, notes, isDone);
        
        //If the project exists, add todo
        if(this.projects.some(project => project.title === projectTitle)){
            
            console.log(`Todo: ${newTodo} created, inside ${projectTitle} project, which existed beforehand`);
            
            let index = this.projects.findIndex(obj => obj.title === projectTitle);
            this.projects[index].addTodo(newTodo); 
        }
        //Else, create project, add todo
        else {
            
            console.log(`Todo: ${newTodo} created, inside ${projectTitle} project, which didn't existed beforehand`);
            
            this.createProject(projectTitle);
            let index = this.projects.findIndex(obj => obj.title === projectTitle);
            this.projects[index].addTodo(newTodo);    
        }

    }

    renderProjects() {
        console.table(this.projects);
    }
}