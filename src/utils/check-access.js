export const checkAccess = (access, roleUser) => {
	if (!access) return true;
	return access.includes(roleUser);
};
