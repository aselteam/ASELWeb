import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/crud.service';

@Component({
  selector: 'asel-agents',
  templateUrl: './asel-agents.component.html',
  styleUrls: ['./asel-agents.component.scss']
})
export class AselAgentsComponent implements OnInit {

  Users: {};
  constructor(public crudService: CrudService) { }
  ngOnInit() {
    this.fetchUsers()
  }  

  fetchUsers() {
    return this.crudService.getUsers().subscribe((data: {}) => {
      this.Users = data;
    })    
  }  

  remove(id) {
    this.crudService.delete(id).subscribe(res => {
      this.fetchUsers()
    })
  }

}
