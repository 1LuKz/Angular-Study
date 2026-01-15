import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certifcates',
  imports: [SecondaryButton, ItemCertificate, RouterLink],
  templateUrl: './certifcates.html',
  styleUrl: './certifcates.css',
})
export class Certifcates {

}
