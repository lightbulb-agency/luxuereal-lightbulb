export interface IDirectMessageItem {
    name: string
    link: string
}

export interface IListItem {
    title: string,
    desc?: string,
    logo: string,
    link?: string,
}

export interface ITitledListItem {
    text: string,
    arr: Array<IListItem>
    shouldNotSort?: boolean
}

export interface IInitialInformation {
    iconText: string
    name: string
    occupation: string
}

// 
export interface IRoutedSection {
    name: string;
    items: ITitledListItem[];
}

export interface ICombinedInformation {
    initialInformation: IInitialInformation,
    directMessageItems: IDirectMessageItem[],
    routes: IRoutedSection[],
}

export interface Users {
    id: number;
    name: string;
    role: string;
    avatar: string;
    logo: string;
}

export interface Contacts {
    id: number;
    user_id: number;
    toolname: string;
    username: string;
    link: string;
    logo: string;
}

export interface Educations {
    id: number;
    user_id: number;
    school: string;
    from: string;
    to: string;
    major: string;
    degree: string;
    description: string;
    logo: string
}

export interface Experiences {
    id: number;
    user_id: number;
    company: string;
    role: string;
    from: string;
    to: string;
    description: string;
    logo: string;
}

export interface Informations {
    id: number;
    user_id: number;
    language: string;
    nationality: string;
    flag: string;
    experience: number;
    resume: string;
}

export interface Projects {
    id: number;
    user_id: number;
    name: string;
    skills: string;
    description: string;
    images: string;
    site_url: string;
    github_url: string;
    thumbnail: string;
}

export interface Services {
    id: number;
    user_id: number;
    name: string;
    description: string;
    image: string;
}

export interface Skills {
    id: number;
    user_id: number;
    name: string;
    symbol: string;
    description: string;
    type: number;
}

export interface Testimonials {
    id: number;
    user_id: number;
    client: string;
    avatar: string;
    feedback: string;
    date: string;
    star: number;
}