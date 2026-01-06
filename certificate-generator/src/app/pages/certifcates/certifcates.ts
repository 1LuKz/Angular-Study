import { Component } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { ItemCertificate } from "../../_components/item-certificate/item-certificate";

@Component({
  selector: 'app-certifcates',
  imports: [SecondaryButton, ItemCertificate],
  templateUrl: './certifcates.html',
  styleUrl: './certifcates.css',
})
export class Certifcates {

}
