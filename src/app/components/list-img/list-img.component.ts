import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImgService } from 'src/app/services/img.service';

@Component({
  selector: 'app-list-img',
  templateUrl: './list-img.component.html',
  styleUrls: ['./list-img.component.css']
})
export class ListImgComponent {
  term = '';
  subscription: Subscription;
  listImages: any[] = [];
  loading: boolean = false;
  imagesPerPage: number = 30;
  currentPage: number = 1;
  calculateTotalPages: number = 0;

  constructor(private _imgService: ImgService){
    this.subscription = this._imgService.getSearchTerm().subscribe(data =>{
      this.term = data;
      this.currentPage = 1;
      this.loading = true;
      this.getImages();
    })
  }

  getImages(){
    this._imgService.getImagenes(this.term, this.imagesPerPage, this.currentPage).subscribe(data => {
      this.loading = false;
      if(data.hits.length === 0){
        this._imgService.setError('Oops, we didn\'t find any results');
        return;
      }

      this.calculateTotalPages = Math.ceil(data.totalHits / this.imagesPerPage);

      this.listImages = data.hits;
    }, error => {
      this._imgService.setError('Oops, an error occurred')
      this.loading = false;
    })
  }

  previousPage(){
    this.currentPage--;
    this.loading = true;
    this.listImages = [];
    this.getImages();
  }

  nextPage(){
    this.currentPage++;
    this.loading = true;
    this.listImages = [];
    this.getImages();
  }

  previousPageClass(){
    if(this.currentPage === 1){
      return false;
    } else {
      return true;
    }
  }

  nextPageClass(){
    if(this.currentPage === this.calculateTotalPages){
      return false;
    }else {
      return true;
    }
  }
}
