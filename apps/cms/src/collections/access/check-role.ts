import { User } from 'payload/dist/auth';

export const checkRole = (user: User, options: { roles: string[] }) =>
    options.roles.includes(user?.role as string);
