export const getPosts = async (page, limit) => {
	const response = await fetch(
		`http://localhost:3005/posts?_page=${page}&_per_page=${limit}`,
	);
	const result = await response.json();
	return { posts: result.data, lastPage: result.last };
};
