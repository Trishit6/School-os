import api from "@/lib/api";

export interface LoginPayload {
email: string;
password: string;
}

export interface User {
id: number;
name: string;
email: string;
role: string;
}

export interface AuthResponse {
token: string;
user: User;
}

export const loginService = async (
payload: LoginPayload,
): Promise<AuthResponse> => {
const response = await api.post(
"/auth/login",
payload,
);

return response.data;
};

export const fetchUserProfileService =
  async (): Promise<User> => {
    const response = await api.get("/auth/profile");

    return response.data.user;
  };

export const logoutService = async () => {
await api.post("/auth/logout");
};
