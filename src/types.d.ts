export interface IUser {
    email: string;
    name: string;
    role: string;
    id: string;
    password: string;
}

export interface IAuthor {
    id: string;
    name: string;
}

export interface ICourse {
    id: string;
    title: string;
    description: string;
    creationDate: string;
    duration: number;
    authors?: string[];
}

export interface ICourseEntities {
    [key: string]: ICourse;
}

export interface IState {
    status: 'idle' | 'loading' | 'failed';
    errors?: string[];
}

export interface ICoursesState extends IState {
    entities: ICourseEntities;
}

export interface IResponse {
    successful: boolean;
    errors?: string[];
}

export interface IAddCourseResponse extends IResponse {
    result?: ICourse;
}

export interface IAddAuthorResponse extends IResponse {
    result?: IAuthor;
}

export interface IAuthorsResponse extends IResponse {
    result?: IAuthor[];
}

export interface IDeleteCourseResponse extends IResponse {
    result?: string;
}

export interface IAuthorEntities {
    [key: string]: IAuthor;
}

export interface IAuthorState extends IState {
    entities: IAuthorEntities;
}

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodoEntity {
    [key: string]: ITodo;
}

export interface ITodosState extends IState {
    entities: ITodoEntity;
    status: 'idle' | 'loading' | 'failed';
}

export interface IUserMeResponse extends IResponse {
    result?: IUser;
}

export interface IUserLoginResponse extends IResponse {
    result?: string;
}

export interface IUserRegisterResponse extends IResponse {
    result?: string;
}
