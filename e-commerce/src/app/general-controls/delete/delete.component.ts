import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AlertifyService } from "src/app/services/alertify-service/alertify.service";
import { BaseService } from "src/app/services/base.service";

@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.css"]
})
export class DeleteComponent implements OnInit {
  @Input() value: any = {};
  @Input() className: string;
  @Input() serviceName: string;
  @Input() childValueClassName: any;
  @Output()
  fillList = new EventEmitter();

  constructor(private base: BaseService, protected alert: AlertifyService) {}

  ngOnInit() {}

  Delete() {
    debugger;
    if (this.className) {
      this.value.className = this.className;
    }
    if (this.serviceName) {
      this.value.serviceName = this.serviceName;
    }

    this.base.Delete(this.value).subscribe(
      data => {
        this.alert.success("Action Successfull");
        this.fillList.emit();
      },
      err => {
        this.alert.error("Error encountered during operation.");
      }
    );
  }
}
