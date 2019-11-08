import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  aboutText = 'This application was created by Mai Bee Her';
  constructor(private flexModal: FlexModalService) {
  }

  ngOnInit() {

  }
  open() {
    this.flexModal.openDialog('about-modal');
    // alert('This application was created by Mai Bee Her (C)');
 }

}
