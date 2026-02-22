import { CommonModule, isPlatformBrowser  } from '@angular/common';
import { Component, Inject, PLATFORM_ID} from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  showSignature = false;

  ngOnInit(): void {

  if (isPlatformBrowser(this.platformId)) {

    const shown = sessionStorage.getItem('devSignatureShown');

    if (!shown) {
      this.showSignature = true;
      sessionStorage.setItem('devSignatureShown', 'true');

      setTimeout(() => {
        this.showSignature = false;
      }, 500);
    }

  }

}
}
