import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-document',
  templateUrl: './all-document.component.html',
  styleUrls: ['./all-document.component.scss']
})
export class AllDocumentComponent implements OnInit {
  selectedTab = 1;
  constructor() { }

  ngOnInit(): void {
  }
  tabs=[
    {
      id:1,
      tabName:'My Documents'
    },
    {
      id:2,
      tabName:'Assigned by me'
    },
    {
      id:3,
      tabName:'Assigned to me'
    },
    {
      id:4,
      tabName:'All Documents'
    }

  ]
  changeTab(tab){
    this.selectedTab= tab.id;    
  }
}
