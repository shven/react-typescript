export interface TUser {
    firstName: string;
    lastName: string;
}

export interface TAuthor {
    id: string;
    name: string;
}

export interface TCourse {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors: string[];
}
