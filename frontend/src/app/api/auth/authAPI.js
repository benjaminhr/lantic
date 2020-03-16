const authBase = "/api/v0.1/auth";

const authAPI = {
    login: `${authBase}/generate_tokens`,
    token: `${authBase}/refresh_access`,
    logout: `${authBase}/destroy_tokens`,
    register: `${authBase}`,
    update: `${authBase}/user/`,
    user: `${authBase}/user`,
    list_users: `${authBase}/users`
};

export default { authBase, ...authAPI };
