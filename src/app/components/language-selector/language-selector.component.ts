import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  constructor(private translocoService: TranslocoService) { }
  public languagesList: Array<
    Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>
  > = [
      {
        imgUrl: '/assets/images/English.png',
        code: 'en',
        name: 'English',
        shorthand: 'ENG',
      },
      {
        imgUrl: '/assets/images/Deutsch.png',
        code: 'de',
        name: 'German',
        shorthand: 'GER',
      },
      {
        imgUrl: '/assets/images/Persian.png',
        code: 'fa',
        name: 'Persian',
        shorthand: 'PER',
      },
      {
        imgUrl: '/assets/images/israelFlag.png',
        code: 'he',
        name: 'Hebrew',
        shorthand: 'HEB',
      }
    ];
  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    languageCode === 'fa' || languageCode === 'he'
      ? (document.body.style.direction = 'rtl')
      : (document.body.style.direction = 'ltr');
    languageCode === 'he' ? (document.documentElement.lang = 'he') : (document.documentElement.lang = 'en')
  }
}
