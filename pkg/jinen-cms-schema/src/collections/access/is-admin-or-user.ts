import { Access } from 'payload/config';
import { checkRole } from './check-role';

export const isAdminOrUser: Access = ({ req: { user } }) =>
    checkRole(user, {
        roles: ['admin', 'user'],
    });
