import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import type { ExperienceItem } from "../../portfolio.models";

@Component({
  selector: "app-experience-section",
  standalone: true,
  templateUrl: "./experience-section.component.html",
  styleUrl: "./experience-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
    @Input({ required: true }) experience: ExperienceItem[] = [];
}
