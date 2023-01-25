import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  
  public title: string;
  public project: project;
  public status: string;
  public filesToUpload: Array<File>;
  public save_project: any;
  public url: string;



  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) { 
    this.filesToUpload = [];
    this.status = '';
    this.title = "Crear proyecto";
    this.project = new project('', '', '', '', 2022, '', '');
    this.url = Global.url;
   }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.project);
    
    // Guardar los datos
    

    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project) {
          this.status = 'success';

          // Subir la imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
          .then((result: any)=> {
            this.save_project = response.project;
          })

          form.reset();
        }else {
          this.status = 'failed';
        }
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }


}
