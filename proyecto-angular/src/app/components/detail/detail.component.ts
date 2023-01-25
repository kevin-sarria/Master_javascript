import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: project;
  public confirm: boolean;




  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { 
    this.url = Global.url;
    this.project = new project('', '', '', '', 2022, '', '');
    this.confirm = false;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this.getProject(id);

    });
  }

  getProject(id:any) {
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      }, error => {
        console.log(<any>error);
      }
    )
  }


  deleteProject(id: any) {
    this._projectService.deleteProject(id).subscribe(
      Response=> {
        if(Response.project) {
          this._router.navigate(['/project']);
        }
      },error => {
        console.log(<any>error);
      }
    );

  }

  setConfirm(confirm: boolean) {
    this.confirm = confirm;
  }















}
