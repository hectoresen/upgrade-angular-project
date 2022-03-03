import { IsLoadingService } from './../../services/is-loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showLoading : boolean = false;

  constructor(private loadingService : IsLoadingService) { }

  ngOnInit(): void {
    this.loadingService.getShowLoading().subscribe((data => this.showLoading = data))
  }

}
