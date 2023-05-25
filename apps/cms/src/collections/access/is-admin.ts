import type { Access } from 'payload/config';
import { checkRole } from './check-role';

export const isAdmin: Access = ({ req: { user } }) =>
    checkRole(user, {
        roles: ['admin'],
    });
