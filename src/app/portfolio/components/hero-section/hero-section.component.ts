import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import type { TechCard } from "../../portfolio.models";

@Component({
    selector: "app-hero-section",
    standalone: true,
    templateUrl: "./hero-section.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
    @Input({ required: true }) techStack: TechCard[] = [];
}
