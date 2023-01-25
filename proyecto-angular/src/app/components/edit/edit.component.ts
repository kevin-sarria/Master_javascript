import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: project;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project: any;
  public url: string;



  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.filesToUpload = [];
    this.status = '';
    this.title = "Editar proyecto";
    this.project = new project('', '', '', '', 2022, '', '');   
    this.url = Global.url;
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

  onSubmit(form: any) {
    this._projectService.updateProject(this.project).subscribe(
      response => {
        
        
        if (response.updateProject) {
          // Subir la imagen
          if (this.filesToUpload) {
            this._uploadService.makeFileRequest(Global.url + "upload-image/" + response.updateProject._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              this.save_project = result.project._id;
              this.status = 'success';
              console.log(this.status);
    
            });
 
          }else{
            this.save_project = response.updateProject._id;
            this.status = 'success';
            console.log(this.status);
          }
       
 
        } else {
          this.status = 'failed';
          console.log(this.status);
        }
 
      },
      error => {
        console.log(error);
      }
    )
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }
  


}
