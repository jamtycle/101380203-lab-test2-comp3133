import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MissionlistComponent } from "./missionlist/missionlist.component";
import { MissionfilterComponent } from "./missionfilter/missionfilter.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, MissionlistComponent, MissionfilterComponent, RouterModule],
    templateUrl: "./app.component.html",
})
export class AppComponent {
    title = "101380203-lab-test2-comp3133";
}
