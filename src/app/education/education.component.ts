import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/educations.model';
import { RestService } from 'src/app/model/rest.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
public educations : Education[]=[];
  constructor(private restService:RestService) {
    this.restService
    .getEducations()
    .subscribe(educations=> this.educations = educations); }


  ngOnInit(): void {
  }
 

}
