import { Component, OnInit } from '@angular/core';
import { ContactList } from 'src/app/constants/contact.constant';
import { ContactModel } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactList: Array<ContactModel> = ContactList;

  constructor() { }

  ngOnInit(): void {
  }

  navigateNewTab(url: string) {
    window.open(url, '_blank');
  }
}
