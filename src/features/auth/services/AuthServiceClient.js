
const AuthserviceClient = ()=>{
    const login = async (email, password) => {
        try {
        const response = await apiClient.post('/auth/login', { email, password });
        return response.data;
        } catch (error) {
        throw new Error('Login failed');
        }
    };
    
    const register = async (userData) => {
        try {
        const response = await apiClient.post('/auth/register', userData);
        return response.data;
        } catch (error) {
        throw new Error('Registration failed');
        }
    };
    
    return { login, register };
}
