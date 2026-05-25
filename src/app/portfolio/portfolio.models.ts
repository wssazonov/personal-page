export type NavItem = {
    label: string;
    href: string;
};

export type TechCard = {
    name: string;
    shortName: string;
    tone: "red" | "blue" | "violet" | "slate" | "rose";
};

export type ProjectImage = {
    src: string;
    alt: string;
    caption: string;
};

export type ProjectCard = {
    title: string;
    description: string;
    role: string;
    result: string;
    details: string[];
    stack: string[];
    preview: "bpmn" | "forms" | "code" | "dashboard";
    images: ProjectImage[];
};

export type ExperienceItem = {
    period: string;
    role: string;
    company: string;
    project?: {
        name: string;
        url?: string;
    };
    projects?: string[];
    description: string;
    stack: string[];
};

export type WhyCard = {
    title: string;
    description: string;
    icon: string;
};

export type ContactItem = {
    label: string;
    icon: string;
    value: string;
    href?: string;
};
