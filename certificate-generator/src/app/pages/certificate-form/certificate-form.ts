import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { certificate } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css',
})
export class CertificateForm {
  certificate: certificate = {
    name: '',
    tasks: []
  }

  task: string = '';

  validation(control: NgModel){
    return control.invalid && control.touched;
  }

  validForm(){
    return this.certificate.tasks.length > 0 && this.certificate.name.length > 0;
  }

  addTask(){
    this.certificate.tasks.push(this.task);
    this.task = '';
  }

  removeTask(index: number){
    this.certificate.tasks.splice(index, 1);
  }

  submit(){
    if(!this.validForm){
      return;
    }
  }
}
