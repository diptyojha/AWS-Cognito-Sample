import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoginClick(){
    const URL ="https://lca-web.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=50qrtkl0j9r8917u61fkjonha5&redirect_uri=http://localhost:4200";
    window.location.assign(URL);
  }
}
