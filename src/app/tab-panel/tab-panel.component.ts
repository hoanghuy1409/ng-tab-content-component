import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from "@angular/core";
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: "au-tab-panel",
  templateUrl: "./tab-panel.component.html",
  styleUrls: ["./tab-panel.component.scss"],
})
export class TabPanelComponent implements AfterContentInit {
  constructor() {}

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    const selectedTab = this.tabs.find((tab) => tab.selected);

    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectedTab(tab: TabComponent) {
    this.tabs.forEach((tab) => (tab.selected = false));

    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabs: this.tabs,
    };
  }
}
