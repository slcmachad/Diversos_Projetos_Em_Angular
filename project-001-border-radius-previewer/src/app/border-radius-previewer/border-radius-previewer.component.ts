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
    ${this.borderRadius.bottomRight}px
    ${this.borderRadius.bottomLeft}px`
  }

  copyToClipboard() {
    const cssToCopy = `border-radius: ${this.borderRadiusStyle}`;

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = cssToCopy;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextArea);
  }
}
