export interface JobsState {
    jobs: Jobs[] | null;
    loading: boolean;
    error: string | null;
}

export interface Jobs {
    mean:      number;
    count:     number;
    results:   Result[];
    __CLASS__: string;
}

export interface Result {
    redirect_url:        string;
    id:                  string;
    __CLASS__:           ResultCLASS;
    company:             Company;
    category:            Category;
    salary_min:          number;
    location:            Location;
    salary_is_predicted: string;
    title:               string;
    adref:               string;
    description:         string;
    salary_max:          number;
    created:             Date;
    longitude?:          number;
    latitude?:           number;
}

export enum ResultCLASS {
    AdzunaAPIResponseJob = "Adzuna::API::Response::Job",
}

export interface Category {
    label:     Label;
    __CLASS__: CategoryCLASS;
    tag:       Tag;
}

export enum CategoryCLASS {
    AdzunaAPIResponseCategory = "Adzuna::API::Response::Category",
}

export enum Label {
    ITJobs = "IT Jobs",
}

export enum Tag {
    ItJobs = "it-jobs",
}

export interface Company {
    __CLASS__:    CompanyCLASS;
    display_name: string;
}

export enum CompanyCLASS {
    AdzunaAPIResponseCompany = "Adzuna::API::Response::Company",
}

export interface Location {
    __CLASS__:    LocationCLASS;
    area:         string[];
    display_name: string;
}

export enum LocationCLASS {
    AdzunaAPIResponseLocation = "Adzuna::API::Response::Location",
}
