import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OwnerService} from '../../shared/service/owner.service';
import {Owner} from '../../shared/models/owner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {
  ownerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
});

  constructor(private ownerService: OwnerService,
              private router: Router) { }

  ngOnInit() {
  }

  save(){
    const owner: Owner = this.ownerForm.value;
    this.ownerService.AddOwner(owner).subscribe(() => this.router.navigateByUrl('/owners'));
  }
}
