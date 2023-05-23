import { Component, OnInit } from '@angular/core';
import { CertificateList } from 'src/app/constants/certificate.constant';
import { CertificateModel } from 'src/app/models/certificate.model';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  certificateList: Array<CertificateModel> = CertificateList;

  constructor() { }

  ngOnInit(): void {
  }

}
