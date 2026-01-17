import { Injectable } from '@angular/core';
import { certificate } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: certificate[] = [];

  constructor(){
  }

  addCertificate(certificate: certificate){
    this.certificates.unshift({...certificate});
    localStorage.setItem('certificates', JSON.stringify(this.certificates));
  }
}
