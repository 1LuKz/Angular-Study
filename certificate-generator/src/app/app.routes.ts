import { Routes } from '@angular/router';
import { Certifcates } from './pages/certifcates/certifcates';
import { CertificateForm } from './pages/certificate-form/certificate-form';
import { Certificate } from './pages/certificate/certificate';

export const routes: Routes = [
  {
    path: "",
    component: Certifcates
  },
  {
    path: "certificates/new",
    component: CertificateForm
  },
  {
    path: "certificates/:id",
    component: Certificate
  }
];
