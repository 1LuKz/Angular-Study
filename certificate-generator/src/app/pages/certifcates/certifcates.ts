import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";
import { RouterLink } from '@angular/router';
import { certificate } from '../../interfaces/certificate';
import { CertificateService } from '../../_services/certificate.service';

@Component({
  selector: 'app-certifcates',
  imports: [SecondaryButton, ItemCertificate, RouterLink],
  templateUrl: './certifcates.html',
  styleUrl: './certifcates.css',
})
export class Certifcates implements OnInit{
  certificates: certificate[] = [];

  constructor(private certificateService: CertificateService){
  }

  ngOnInit(): void {
    this.certificates = this.certificateService.certificates;
    console.log(this.certificates);
  }
}
