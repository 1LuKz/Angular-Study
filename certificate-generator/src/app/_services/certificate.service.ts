import { Injectable } from '@angular/core';
import { certificate } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: certificate[] = [];

  addCertificate(certificate: certificate){
    this.certificates.push(certificate);
  }
}
