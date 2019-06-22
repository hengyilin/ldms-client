import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {

  firstFromGroup: FormGroup;
  secondFromGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.firstFromGroup = fb.group({
      'EmailCtrl': []
    });

    this.secondFromGroup = fb.group({
      'MessageCtrl': ['', []]
    });
  }

  ngOnInit() {
  }

}
