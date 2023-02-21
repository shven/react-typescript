import * as React from 'react';
import { TUser } from '../types';
import { useEffect } from 'react';
import { apiUrl } from '../constants';

interface Props {
    children: React.ReactNode;
}

export type TUserContext = {
    user?: TUser;
    isLoggedIn: boolean;
    saveToken: (token: string) => void;
    logout: () => void;
};

export const UserContext = React.createContext<TUserContext | null>(null);
const initialUser: TUser = { email: '', name: '' };
const UserProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = React.useState<TUser>(initialUser);
    const [token, setToken] = React.useState('');
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const saveToken = (token: string) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(initialUser);
        setIsLoggedIn(false);
    };

    // mounted
    useEffect(() => {
        const tokenFromStorage = localStorage.getItem('token');
        if (tokenFromStorage) {
            setToken(tokenFromStorage);
        }
    }, []);

    // Store token in localstorage when updated
    useEffect(() => {
        if (token.length > 0) {
            console.log('fetch users/me');
            fetch(`${apiUrl}/users/me`, {
                headers: { Authorization: token }
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    if (result.successful && result.result.email && result.result.name) {
                        setUser({ email: result.result.email, name: result.result.name });
                        setIsLoggedIn(true);
                    } else {
                        logout();
                    }
                });
        }
    }, [token]);

    return <UserContext.Provider value={{ user, saveToken, isLoggedIn, logout }}>{children}</UserContext.Provider>;
};

export default UserProvider;
