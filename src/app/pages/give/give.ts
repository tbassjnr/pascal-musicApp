import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-give',
  imports: [CommonModule, FormsModule],
  templateUrl: './give.html',
  styleUrl: './give.css',
})
export class Give {
  selectedAmount: number = 100;
  customAmount: number | null = null;
  selectedMethod: string = 'momo';
  
  amounts = [50, 100, 250, 500];

  selectAmount(amt: number) {
    this.selectedAmount = amt;
    this.customAmount = null;
  }

  processDonation() {
    const finalAmount = this.customAmount || this.selectedAmount;
    alert(`Redirecting to secure ${this.selectedMethod.toUpperCase()} gateway to process your gift of GHS ${finalAmount}. Thank you for your seeds!`);
    // Here you would integrate Paystack, Flutterwave, or PayPal API
  }
}
