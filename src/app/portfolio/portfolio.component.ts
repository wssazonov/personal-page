import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from "@angular/core";

import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { ContactsSectionComponent } from "./components/contacts-section/contacts-section.component";
import { ExperienceSectionComponent } from "./components/experience-section/experience-section.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { PortfolioHeaderComponent } from "./components/portfolio-header/portfolio-header.component";
import { ProjectsSectionComponent } from "./components/projects-section/projects-section.component";
import { SkillsSectionComponent } from "./components/skills-section/skills-section.component";
import { WhyMeSectionComponent } from "./components/why-me-section/why-me-section.component";
import {
    CONTACTS,
    EXPERIENCE,
    HERO_TECH_STACK,
    NAV_ITEMS,
    PROJECTS,
    SKILLS,
    WHY_ME,
} from "./portfolio.data";

@Component({
    selector: "app-portfolio",
    standalone: true,
    imports: [
        AboutSectionComponent,
        ContactsSectionComponent,
        ExperienceSectionComponent,
        HeroSectionComponent,
        PortfolioHeaderComponent,
        ProjectsSectionComponent,
        SkillsSectionComponent,
        WhyMeSectionComponent,
    ],
    templateUrl: "./portfolio.component.html",
    styleUrl: "./portfolio.component.scss",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
    protected readonly navItems = NAV_ITEMS;
    protected readonly heroTechStack = HERO_TECH_STACK;
    protected readonly skills = SKILLS;
    protected readonly projects = PROJECTS;
    protected readonly experience = EXPERIENCE;
    protected readonly whyMe = WHY_ME;
    protected readonly contacts = CONTACTS;
}
