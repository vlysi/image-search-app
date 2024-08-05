import { Component } from '@angular/core';
import { ImgService } from 'src/app/services/img.service';

@Component({
  selector: 'app-search-img',
  templateUrl: './search-img.component.html',
  styleUrls: ['./search-img.component.css']
})
export class SearchImgComponent {
  imageName: string;

  constructor(private _imgService: ImgService){
    this.imageName = '';
  }

  searchImages(){
    if(this.imageName === ''){
      this._imgService.setError('Add a search text');
      return;
    }

    this._imgService.sendSearchTerm(this.imageName);
  }
}
