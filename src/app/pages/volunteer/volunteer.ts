import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './volunteer.html',
  styleUrl: './volunteer.css',
})
export class Volunteer {

  volunteerForm!: FormGroup;
  isSubmitted = false;

  interests = [
    'Music & Worship',
    'Protocol & Ushering',
    'Media & Technical',
    'Choose Jesus Outreach',
    'Administration'
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.volunteerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      areaOfInterest: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.volunteerForm.valid) {
      console.log('Volunteer Data:', this.volunteerForm.value);
      this.isSubmitted = true;
      // In a real app, send this to your backend/API
    }
  }

  goBack() {
    this.router.navigate(['/ministry']);
  }
}
