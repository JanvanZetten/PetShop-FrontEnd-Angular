import { Component, OnInit } from '@angular/core';
import {Owner} from '../../shared/models/owner';
import {OwnerService} from '../../shared/service/owner.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  owner: Owner;
  id: number;

  constructor(private ownerService: OwnerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwner(this.id).subscribe(ownerFromService => this.owner = ownerFromService);
  }

  delete(){
    this.ownerService.deleteOwner(this.id).subscribe(() => this.router.navigateByUrl('/owners'));
  }
}
