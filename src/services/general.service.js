import axios from "axios";

// const API_URL = process.env.REACT_APP_API_Link;
const API_URL = "http://127.0.0.1:8000";

const login = (values) => {
    const headers = {
        "Content-Type": "application/json",
    };

    return axios.post(`${API_URL}/login-user`, {
        username: values.username,
        password: values.password,
    }, { headers: headers, }
    );
};

const register = (values) => {
    const headers = {
        "Content-Type": "application/json",
    };

    return axios.post(`${API_URL}/user-register`, {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
    }, { headers: headers, }
    );
};

const loginAdmin = (values) => {
    const headers = {
        "Content-Type": "application/json",
    };

    return axios.post(`${API_URL}/login-admin`, {
        username: values.username,
        password: values.password,
    }, { headers: headers, }
    );
};

const listUsers = () => {
    const headers = {
        "Content-Type": "application/json",
    };

    return axios.get(`${API_URL}/list-users`, {
        headers: headers,
    }
    );
};

const listMessages = () => {
    const headers = {
        "Content-Type": "application/json",
    };

    return axios.get(`${API_URL}/list-messages`, {
        headers: headers,
    }
    );
};

const submitMessage = (values) => {
    const headers = {
        "Content-Type": "application/json",
    };

    return axios.post(`${API_URL}/submit-message`, {
        created_by: values.created_by,
        subject: values.subject,
        message: values.message,
    }, {
        headers: headers,
    }
    );
};

const GeneralService = {
    login,
    loginAdmin,
    register,
    listUsers,
    listMessages,
    submitMessage,
};

export default GeneralService;
