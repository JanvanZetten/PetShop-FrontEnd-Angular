import { Component, OnInit } from '@angular/core';
import {Owner} from '../../shared/models/owner';
import {OwnerService} from '../../shared/service/owner.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  owner: Owner;

  constructor(private ownerService: OwnerService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwner(id).subscribe(ownerFromService => this.owner = ownerFromService);
  }

}
