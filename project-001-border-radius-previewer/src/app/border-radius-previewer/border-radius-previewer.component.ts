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

  borderRadiusStyle = '0px 0px 0px 0px';
  cssCode = `border-radius: ${this.borderRadiusStyle}`;

  updateCSS() {
    this.borderRadiusStyle = `${this.borderRadius.topLeft}px ${this.borderRadius.topRight}px ${this.borderRadius.bottomRight}px ${this.borderRadius.bottomLeft}px`;
    this.cssCode = `border-radius: ${this.borderRadiusStyle}`;
  }

  copyToClipboard() {
    const cssToCopy = this.cssCode;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(cssToCopy)
        .then(() => {
          // Notifica o usuário de que o CSS foi copiado
          alert('CSS copiado para a área de transferência!');
        })
        .catch((err) => {
          console.error('Falha ao copiar o CSS: ', err);
        });
    } else {
      // Caso o navegador não suporte a API Clipboard, exiba uma mensagem de fallback
      alert('Infelizmente, o seu navegador não suporta a funcionalidade de cópia para a área de transferência. Por favor, copie o CSS manualmente.');
    }
  }
}
