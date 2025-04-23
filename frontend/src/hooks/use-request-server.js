import { useSelector } from 'react-redux';
import { selectSession } from '../store';
import { server } from '../BFF';
import { useCallback } from 'react';

export const useRequestServer = () => {
	const session = useSelector(selectSession);
	return useCallback(
		(operation, ...params) => {
			const request = [
				'authorization',
				'registration',
				'fetchPost',
				'fetchAllPosts',
			].includes(operation)
				? params
				: [...params, session];
			return server[operation](...request);
		},
		[session],
	);
};
