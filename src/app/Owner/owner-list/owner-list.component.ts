import { Component, OnInit } from '@angular/core';
import {Owner} from '../../shared/models/owner';
import {OwnerService} from '../../shared/service/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  ownersList: Owner[];

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.refresh();
  }

refresh() {
    this.ownerService.getOwners().subscribe(owners => this.ownersList = owners);
}
}
