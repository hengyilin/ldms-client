import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.css']
})
export class MessageNewComponent implements OnInit {

  firstFromGroup: FormGroup;
  secondFromGroup: FormGroup;

  priorities: string[] = ['High', 'Medium', 'Low'];
  departments: object[] = [
    {
      id: 1,
      name: 'Complaints'
    }, {
      id: 2,
      name: 'Loyalty'
    }, {
      id: 3,
      name: 'Promotions'
    }
  ];

  constructor(fb: FormBuilder) {
    this.firstFromGroup = fb.group({
      'emailCtrl': ['', [Validators.required]],
      'priorityCtrl': ['', [Validators.required]],
      'departmentCtrl': ['', [Validators.required]]
    });

    this.secondFromGroup = fb.group({
      'messageCtrl': ['', [Validators.required]]
    });
  }

  getDepartmentName(department: object):string {
    return department ? department['name'] : undefined;
  }

  ngOnInit() {
  }

}
