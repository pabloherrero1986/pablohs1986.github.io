import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sent: boolean;
  confirmation: string;
  form: FormGroup;

  

  constructor(private _location: Location, private _http: HttpClient) { 
    this.sent = false;
    this.confirmation = '';
  }

  ngOnInit(): void {
    this.initForm();
  }

  /** Method that initializes the form. */
  private initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.compose([Validators.email, Validators.required])),
      message: new FormControl(null, Validators.required)
    });
  }

  /** Method that sends the form information to the server of Formspree. */
  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this._http.post('https://formspree.io/f/mwkwgqlv',
        { name: email.name, replyto: email.email, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
            this.showConfirmation();
          }
        );
    } 
  }

  /** Method show a confirmation text on submit*/
  showConfirmation() {
    this.sent = true;
    this.confirmation = "Sending your message, I'll answer you soon, thank you!"

    setTimeout(() => { 
      this.sent = false;
      this.goBack();
    }, 2000);
  }

    /** Method that returns to previous screen. */
  goBack() {
    this._location.back();
  }
}
