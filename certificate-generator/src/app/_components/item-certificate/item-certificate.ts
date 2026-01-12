import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certificate.html',
  styleUrl: './item-certificate.css',
})
export class ItemCertificate {
  id: string = ""
}
