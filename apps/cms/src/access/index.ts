import { Access } from 'payload/config';
import { User } from 'payload/dist/auth';

export const isAdmin: Access = ({ req: { user } }): boolean => {
	console.log(
		'isAdmin',
		user,
		checkRole(user, {
			roles: ['admin'],
		}),
	);

	return checkRole(user, {
		roles: ['admin'],
	});
};

export const isUser: Access = ({ req: { user } }): boolean => {
	console.log(
		'isUser',
		user,
		checkRole(user, {
			roles: ['user'],
		}),
	);

	return checkRole(user, {
		roles: ['user'],
	});
};

const checkRole = (user: User, options: { roles: string[] }): boolean =>
	options.roles.includes(user?.role as string);
