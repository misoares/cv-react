export interface IExperienceCard {
    logo: string
    avatar: string
    title: string
    position: string
    datePlace: string
    cardContent: string[]
    keywords: string
}

export interface ISkill {
    title: string
    skills: JSX.Element[]
}

export interface IContact {
    contact: string
    icon : JSX.Element
}

export interface Response {
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data: User[]
}

export interface User  {
    id?: number,
    email?: string,
    first_name?: string,
    last_name?: string,
    avatar?: string,
}