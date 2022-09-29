export const getSwapiIdFromUrl = (url) => {
	// eslint-disable-next-line
	const [_endpoint, id] = url
		.replace('https://swapi.dev/api/', '')
		.slice(0, -1)
		.split('/')
		

	return id
}

export default getSwapiIdFromUrl