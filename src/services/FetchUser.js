export const getUserInfo = (name) => {
    let username = name.toLowerCase().trim();
    const URL = `https://api.github.com/users/${username}`;
    return fetch(URL)
            .then((res) => res.json());
}
