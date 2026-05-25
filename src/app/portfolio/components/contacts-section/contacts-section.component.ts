import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import type { ContactItem } from "../../portfolio.models";

@Component({
    selector: "app-contacts-section",
    standalone: true,
    templateUrl: "./contacts-section.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsSectionComponent {
    @Input({ required: true }) contacts: ContactItem[] = [];
}
