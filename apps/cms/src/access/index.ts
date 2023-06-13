import { Access } from 'payload/config';
import { User } from 'payload/dist/auth';

export const isAdmin: Access = ({ req: { user } }) =>
    checkRole(user, {
        roles: ['admin'],
    });

export const isUser: Access = ({ req: { user } }) =>
    checkRole(user, {
        roles: ['user'],
    });

const checkRole = (user: User, options: { roles: string[] }) =>
    options.roles.includes(user?.role as string);
