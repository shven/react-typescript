import { mockedAuthorsList } from '../constants';

export default (id: string | string[]): string => {
    const authorNames: string[] = [];

    if (typeof id === 'string') {
        id = [id];
    }

    if (Array.isArray(id)) {
        id.forEach((id) => {
            const name = mockedAuthorsList.find((author) => author.id === id)?.name;
            if (name) {
                authorNames.push(name);
            }
        });
    }

    return authorNames.join(', ');
};
