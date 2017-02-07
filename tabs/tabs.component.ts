import { Component, Input, OnInit } from '@angular/core';
import { Tab } from "../shared/tab.model";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styles: [`
    .pane{
      padding: 1em;
    }
    .close
    {
      margin-left: 10px;
      margin-top:-2px;
    }
  `]
})

export class TabsComponent implements OnInit {
  @Input() tabs : Tab[]=[];

  ngOnInit() {
  }

  addTab():void{
    let tab = new Tab();
    tab.title = "title";
    tab.active = true;

    this.tabs.forEach(tab => tab.active = false);
    this.tabs.push(tab);

    console.log(this.tabs);
  }

  selectTab(tab: Tab){
    // deactivate all tabs
    this.tabs.forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }

  closeTab(tab: Tab){
    let index = this.tabs.indexOf(tab);

    if (index > -1) {
        this.tabs.splice(index, 1);

        if(index>0){
          this.selectTab(this.tabs[index-1]);
        }
    }
  }
}
