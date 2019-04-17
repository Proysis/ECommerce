import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  
  title: string = "";
  constructor(private router:Router, private currentActivatedRoute:ActivatedRoute, private base:BaseService) {}

  ngOnInit() {
    if(this.base.OnlineAdmin){

      var title = this.currentActivatedRoute.children[0].routeConfig.component.name.replace('Component','');
      this.title = title[title.length-1] == "y" ? title.replace('y', 'ies') : title + "s";
    }else{
      this.router.navigateByUrl("/portal/auth");
    }
  }
 

  SetTitle(title) {
    this.title = title;
  }
}
