export class Work {

    static worksCounter: number = 0;
    id: number;
    tittle: string;
    shortDescription: string;
    description: string;
    technologies: string[];
    livelinkUrl: string;
    linkUrl: string;
    status: boolean;

    constructor(
        tittle: string,
        shortDescription: string,
        description: string,
        technologies: string[],
        linkUrl: string,
        livelinkUrl: string,
        status: boolean
    ) {
        Work.worksCounter++;
        this.id = Work.worksCounter;
        this.tittle = tittle;
        this.shortDescription = shortDescription;
        this.description = description;
        this.technologies = technologies;
        this.livelinkUrl = livelinkUrl;
        this.linkUrl = linkUrl;
        this.status = status;
    }

}
