// _page _limit json-server не работает, хотя версия  0.17.4, links = null при response.headers.get('Link') и при response.headers.get('X-powered-by')
// title_like= тоже не работает, пробовал через кириллицу, латиницу, по одному символу, json-server все равно возвращает все элементы

export const getPosts = async (page, limit) => {
	const response = await fetch(
		`http://localhost:3005/posts?&_page=${page}&_per_page=${limit}`,
	);
	const result = await response.json();
	return { posts: result.data, lastPage: result.last };
};
