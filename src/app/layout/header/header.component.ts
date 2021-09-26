import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag=false;
  constructor() { }

  ngOnInit(): void {
  }
changebut(value:any)
{
  if(value=="dashboard")
this.flag=true;
}
}
