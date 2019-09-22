import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  showCreateForm = TextTrackCue;
  customers = [{
    name : 'Thien',
    id : 1,
  },
  {
     name : 'Thien1',
    id : 2,
  },
    {
     name : 'Thien1',
    id : 3,
  },
  ]
  add(){
    
  }
  destroy(id){
    this.customers.splice(id - 1,1);
  }
}
