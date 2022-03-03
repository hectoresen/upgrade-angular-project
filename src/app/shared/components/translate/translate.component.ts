import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  public activeLang = 'es';
  public langEs = 'es';
  public langEn = 'en';

  constructor
  (
    private translate: TranslateService
  )
  {
    this.translate.setDefaultLang(this.activeLang);
    this.translate.use(this.langEs);
  }

  ngOnInit(): void {
  }

  changeLang():void{
    (this.activeLang === this.langEs) ? this.activeLang = this.langEn : this.activeLang = this.langEs;
    this.translate.use(this.activeLang)
  }
}

