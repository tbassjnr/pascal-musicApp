import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactForm!: FormGroup;
  maxLength = 500;
  isSubmitted = false;

  faqs = [
    {
      question: 'How can I book you for a private event?',
      answer: "Please use the contact form above with 'Booking Inquiry' as the subject. Include your event date, location, and details about the venue. My management team will respond within 48 hours."
    },
    {
      question: 'Do you offer meet & greet packages?',
      answer: 'Yes! VIP packages with meet & greet opportunities are available for most shows. Check the specific show details on the Tour page or contact my team for more information.'
    },

    {
      question: 'How can I book you for a private event?',
      answer: "Please use the contact form above with 'Booking Inquiry' as the subject. Include your event date, location, and details about the venue. My management team will respond within 48 hours."                                    
    },

    {
      question: 'Do you offer meet & greet packages?',
      answer: 'Yes! VIP packages with meet & greet opportunities are available for most shows. Check the specific show details on the Tour page or contact my team for more information.'                                      
    },
    
    {
      question: 'Do you offer meet & greet packages?',
      answer: 'Yes! VIP packages with meet & greet opportunities are available for most shows. Check the specific show details on the Tour page or contact my team for more information.'                                      
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(this.maxLength)]]
    });
  }

  get currentLength(): number {
    return this.contactForm.get('message')?.value?.length || 0;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Thank you! Your message has been sent.');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
