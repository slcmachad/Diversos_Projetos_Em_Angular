import { Component } from '@angular/core';

@Component({
  selector: 'app-border-radius-previewer',
  templateUrl: './border-radius-previewer.component.html',
  styleUrls: ['./border-radius-previewer.component.css']
})
export class BorderRadiusPreviewerComponent {

  borderRadius = {
    topLeft: 10,
    topRight: 25,
    bottomLeft: 40,
    bottomRight: 65,
  };

  borderRadiusStyle = '0';

  updateCSS() {
    this.borderRadiusStyle = `${this.borderRadius.topLeft}px
    ${this.borderRadius.topRight}px
    ${this.borderRadius.bottomLeft}px
    ${this.borderRadius.bottomRight}px`
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
