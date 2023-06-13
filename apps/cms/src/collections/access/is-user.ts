import type { Access } from 'payload/config';
import { checkRole } from './check-role';

export const isUser: Access = ({ req: { user } }) =>
    checkRole(user, {
        roles: ['user'],
    });
