import type { IAuthor } from '../types';

export default (id: string | string[], allAuthors: IAuthor[]): string => {
    const authorNames: string[] = [];

    if (typeof id === 'string') {
        id = [id];
    }

    if (Array.isArray(id)) {
        id.forEach((id) => {
            const name = allAuthors.find((author) => author.id === id)?.name;
            if (name) {
                authorNames.push(name);
            }
        });
    }

    return authorNames.join(', ');
};
