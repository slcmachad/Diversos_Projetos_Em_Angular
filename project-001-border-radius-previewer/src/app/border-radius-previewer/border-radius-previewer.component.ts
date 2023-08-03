import { Component } from '@angular/core';

@Component({
  selector: 'app-border-radius-previewer',
  templateUrl: './border-radius-previewer.component.html',
  styleUrls: ['./border-radius-previewer.component.css']
})
export class BorderRadiusPreviewerComponent {

  borderRadius = {
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  };

  borderRadiusStyle = '0';

  updateCSS() {
    this.borderRadiusStyle = `${this.borderRadius.topLeft}px
                              ${this.borderRadius.topRight}px
                              ${this.borderRadius.bottomLeft}px
                              ${this.borderRadius.bottomRight}px`
  }

}
