import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staf-sanc',
  templateUrl: './staf-sanc.component.html',
  styleUrls: ['./staf-sanc.component.scss']
})
export class StafSancComponent implements OnInit {
  staffSancFormGrp: FormGroup;
  types: string[] = [];
  submitted = false;
  edit = false;
  couponId: string;
  view = false;

  constructor(private cb: FormBuilder) { }

  ngOnInit(): void {
    this.staffSancFormGrp = this.cb.group({
      cadcode:[''],
      cadname:[''],
      cadcateg:[''],
      sanction:[''],
      present:[''],
      vacant:[''],
      
    })
  }

}
