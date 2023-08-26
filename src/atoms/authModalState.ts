// Recoil documentation: https://recoiljs.org/docs/introduction/getting-started
import { atom } from 'recoil';

// Create type AuthModalState
export interface AuthModalState {
    open: boolean;
    view: 'login' | 'signup' | 'reset';
}

// Create default AuthModalState
const defaultModalState: AuthModalState = {
    open: false,
    view: 'login'
};

// Create atom (template from docs)
export const authModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: defaultModalState, 
});