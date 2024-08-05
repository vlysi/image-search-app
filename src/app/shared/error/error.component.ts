import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImgService } from 'src/app/services/img.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnDestroy {
  text: string = '';
  display: boolean = false;
  subscription: Subscription;

  constructor(private _imgService: ImgService){
    this.subscription = this._imgService.getError().subscribe(data =>{
      this.displayMessage();
      this.text = data;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  displayMessage(){
    this.display = true;
    setTimeout(() => {
      this.display = false;
    }, 2000);
  }
}
