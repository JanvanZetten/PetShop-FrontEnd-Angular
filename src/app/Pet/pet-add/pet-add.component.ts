import { Component, OnInit } from '@angular/core';
import {PetServiceService} from '../../shared/service/pet-service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {OwnerService} from '../../shared/service/owner.service';
import {Owner} from '../../shared/models/owner';
import {Pet} from '../../shared/models/pet';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {
  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    birthday: new FormControl(''),
    price: new FormControl(''),
    previousOwner: new FormControl('')
  });

  owners: Owner[];

  constructor(private petService: PetServiceService,
              private router: Router,
              private ownerService: OwnerService) { }


  ngOnInit() {
    this.ownerService.getOwners().subscribe(owners => this.owners = owners);
  }

  save() {
    const pet: Pet = this.petForm.value;
    debugger;
    this.petForm.reset();
    this.petService.addPet(pet).subscribe(() => this.router.navigateByUrl('/pets'));
  }

}
