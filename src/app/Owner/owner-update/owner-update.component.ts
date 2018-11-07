import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OwnerService} from '../../shared/service/owner.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Owner} from '../../shared/models/owner';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent implements OnInit {

  ownerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  });

  id: number;

  constructor(private ownerService: OwnerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.ownerService.getOwner(this.id).subscribe(owner => {
      this.ownerForm.patchValue({
        firstName: owner.firstName,
        lastName: owner.lastName
      });
    });
  }

  save(){
    const owner: Owner = this.ownerForm.value;
    owner.id = this.id;
    this.ownerService.UpdateOwner(owner).subscribe(() => this.router.navigateByUrl('/owners/' + this.id));
  }

}
