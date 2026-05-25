import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Input,
} from "@angular/core";

import type { ProjectCard, ProjectImage } from "../../portfolio.models";

@Component({
    selector: "app-projects-section",
    standalone: true,
    templateUrl: "./projects-section.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
    @Input({ required: true }) projects: ProjectCard[] = [];

    protected openedProject: ProjectCard | null = null;
    protected openedImage: ProjectImage | null = null;

    protected openPreview(project: ProjectCard, image: ProjectImage): void {
        if (!project.images.length) {
            return;
        }

        this.openedProject = project;
        this.openedImage = image;
    }

    protected selectPreviewImage(image: ProjectImage): void {
        this.openedImage = image;
    }

    protected closePreview(): void {
        this.openedProject = null;
        this.openedImage = null;
    }

    @HostListener("document:keydown.escape")
    protected closePreviewByEscape(): void {
        this.closePreview();
    }
}
