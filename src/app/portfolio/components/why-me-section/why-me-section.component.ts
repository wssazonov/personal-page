import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import type { WhyCard } from "../../portfolio.models";

@Component({
  selector: "app-why-me-section",
  standalone: true,
  templateUrl: "./why-me-section.component.html",
  styleUrl: "./why-me-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyMeSectionComponent {
    @Input({ required: true }) cards: WhyCard[] = [];
}
