export const getPosts = async (search, page, limit) => {
	const response = await fetch(
		`http://localhost:3005/posts?title_like=${search}&_page=${page}&_limit=${limit}`,
	);
	const data = await response.json();
	const totalCount = response.headers.get('X-Total-Count');

	return {
		posts: data,
		lastPage: Math.ceil(totalCount / limit),
	};
};
