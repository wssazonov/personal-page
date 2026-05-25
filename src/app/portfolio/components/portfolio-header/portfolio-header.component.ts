import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import type { NavItem } from "../../portfolio.models";

@Component({
  selector: "app-portfolio-header",
  standalone: true,
  templateUrl: "./portfolio-header.component.html",
  styleUrl: "./portfolio-header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioHeaderComponent {
    @Input({ required: true }) navItems: NavItem[] = [];
}
