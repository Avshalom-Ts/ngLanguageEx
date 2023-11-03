import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly translocoService: TranslocoService) { }

  ngOnInit() {
    this.translocoService.translate('title');
    this.translocoService.translate('form.firstName')
  }
}
