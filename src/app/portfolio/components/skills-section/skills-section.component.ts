import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-skills-section",
  standalone: true,
  templateUrl: "./skills-section.component.html",
  styleUrl: "./skills-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSectionComponent {
    @Input({ required: true }) skills: string[] = [];
}
