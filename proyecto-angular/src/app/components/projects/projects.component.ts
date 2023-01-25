import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public projects: project[];
  public url: string;

  constructor(
    private _projectService: ProjectService
  ) { 
    this.projects = [];
    this.url = Global.url;
   }

  ngOnInit() {
    this.getProjects();
  }


  getProjects() {
    this._projectService.getProjects().subscribe( 
      response=> {
        

        if(response.projects) {
          this.projects = response.projects;
        }

        console.log(response);
      }, error => {
        console.log(<any>error)
      }
     )

  }

}
