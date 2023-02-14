import * as React from 'react';
import { TAuthor } from '../types';
import { mockedAuthorsList } from '../constants';
import getRandomString from '../helpers/getRandomString';
import { useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

export type TAuthorContext = {
    authors: TAuthor[];
    saveAuthor: (course: TAuthor) => void;
};

export const AuthorContext = React.createContext<TAuthorContext | null>(null);

function getInitialState() {
    const authors = localStorage.getItem('authors');
    return authors ? JSON.parse(authors) : mockedAuthorsList;
}

const AuthorProvider: React.FC<Props> = ({ children }) => {
    const [authors, setAuthors] = React.useState<TAuthor[]>(getInitialState);

    const saveAuthor = (author: TAuthor) => {
        const newAuthor: TAuthor = {
            id: getRandomString(),
            name: author.name
        };

        setAuthors([...authors, newAuthor]);
    };

    useEffect(() => {
        localStorage.setItem('authors', JSON.stringify(authors));
    }, [authors]);

    return <AuthorContext.Provider value={{ authors, saveAuthor }}>{children}</AuthorContext.Provider>;
};

export default AuthorProvider;
