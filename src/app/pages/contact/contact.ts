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
    answer: `To book me for a private event, please use the contact form and select 
    "Booking Inquiry" as the subject. Include your event date, location, venue type, 
    and any important details. My management team will review your request and 
    respond within 24–48 hours with availability and next steps.`
  },

  {
    question: 'Do you offer meet & greet packages?',
    answer: `Yes, meet & greet packages are available for most shows. These usually 
    include early access, a photo opportunity, and a chance to connect briefly 
    before or after the performance. Check the event details or contact us for 
    specific availability.`
  },

  {
    question: 'Are you available for international events?',
    answer: `Yes, international bookings are considered based on schedule and 
    logistics. Please provide full event details when reaching out, and our team 
    will discuss travel arrangements and performance requirements with you.`
  },

  {
    question: 'Can I request specific songs for my event?',
    answer: `Song requests can be discussed during the booking process. While the 
    final setlist is carefully curated, we’re happy to consider special requests 
    for private events and celebrations.`
  },

  {
    question: 'How can I collaborate with you?',
    answer: `For collaborations, please send a detailed proposal through the 
    contact form including your idea, timeline, and any supporting material. 
    Our team will review and respond if it’s a good fit.`
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
