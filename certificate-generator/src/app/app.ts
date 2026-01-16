import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { BaseUi } from "./_components/base-ui/base-ui";
import { CertificateService } from './_services/certificate.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('certificate-generator');
  showNavbar: boolean = true;

  constructor(private certificateService: CertificateService){
  }

  ngOnInit(): void {
    const certifcates = localStorage.getItem('certificates');
    this.certificateService.certificates = certifcates ? JSON.parse(certifcates) : [];
    console.log(this.certificateService.certificates);
  }
}
