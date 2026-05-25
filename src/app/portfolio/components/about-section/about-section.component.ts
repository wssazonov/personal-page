import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-about-section",
  standalone: true,
  templateUrl: "./about-section.component.html",
  styleUrl: "./about-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {}
