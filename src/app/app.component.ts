import { ChangeDetectionStrategy, Component } from "@angular/core";

import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [PortfolioComponent],
    template: "<app-portfolio />",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
