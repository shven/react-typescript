// file with mocked data
import type { IAuthorEntities, IAuthorState, ICourseEntities, ICoursesState } from './types';
import type { IUserState } from './context/userSlice';

export const apiUrl = process.env.REACT_APP_API_SERVER_URL;

export const mockedCoursesList: ICourseEntities = {
    'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba': {
        id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
        title: 'JavaScript',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
                    not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                    nchanged.`,
        creationDate: '08/03/2021',
        duration: 160,
        authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d', 'f762978b-61eb-4096-812b-ebde22838167']
    },
    'b5630fdd-7bf7-4d39-b75a-2b5906fd0916': {
        id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
        title: 'Angular',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book.`,
        creationDate: '10/11/2020',
        duration: 210,
        authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f', '095a1817-d45b-4ed7-9cf7-b2417bcbf748']
    }
};

export const mockedAuthorsList: IAuthorEntities = {
    '27cc3006-e93a-4748-8ca8-73d06aa93b6d': {
        id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
        name: 'Vasiliy Dobkin'
    },
    'f762978b-61eb-4096-812b-ebde22838167': {
        id: 'f762978b-61eb-4096-812b-ebde22838167',
        name: 'Nicolas Kim'
    },
    'df32994e-b23d-497c-9e4d-84e4dc02882f': {
        id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
        name: 'Anna Sidorenko'
    },
    '095a1817-d45b-4ed7-9cf7-b2417bcbf748': {
        id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
        name: 'Valentina Larina'
    }
};

export const mockedLoggedInUserState: IUserState = {
    user: {
        name: 'John',
        email: 'john@doe.com',
        password: 'test123',
        role: 'user',
        id: 'b534bb35-460f-4d6c-870f-43983fd10c66'
    },
    token: '123456789',
    isLoggedIn: true,
    status: 'idle'
};

export const mockedCoursesState: ICoursesState = {
    entities: mockedCoursesList,
    status: 'idle'
};

export const mockedAuthorsState: IAuthorState = {
    entities: mockedAuthorsList,
    status: 'idle'
};
