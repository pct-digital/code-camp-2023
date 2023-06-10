import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { LeistungsPaket } from '@pct/kk-easy-pay-common';
@Component({
  selector: 'pct-leistung-paket-page',
  templateUrl: './leistung-paket-page.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class LeistungPaketPageComponent implements OnInit {
  pakete: LeistungsPaket[] = [];
  constructor(private entry: EntryService) {}
  async ngOnInit() {
    this.pakete = await this.entry.listPakete();
  }
}
