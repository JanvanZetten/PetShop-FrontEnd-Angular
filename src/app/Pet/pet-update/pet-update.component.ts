import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {PetServiceService} from '../../shared/service/pet-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Owner} from '../../shared/models/owner';
import {OwnerService} from '../../shared/service/owner.service';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {

  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    birthday: new FormControl(''),
    price: new FormControl(''),
    previousOwner: new FormControl('')
  });

  id: number;
  owners: Owner[];

  constructor(private petService: PetServiceService,
              private route: ActivatedRoute,
              private router: Router, private ownerService: OwnerService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(this.id).subscribe(pet => {
      this.petForm.patchValue({
        name: pet.name,
        type: pet.type,
        birthday: pet.birthday,
        price: pet.price,
        previousOwner: pet.previousOwner // TODO Make the initial owner be the right one
    });
    });
    this.ownerService.getOwners().subscribe(owners => this.owners = owners);
  }

  save() {
    const pet = this.petForm.value;
    pet.id = this.id;
    this.petService.updatePet(pet).subscribe(() =>
      this.router.navigateByUrl('/pets/' + pet.id)
    );
  }
}
