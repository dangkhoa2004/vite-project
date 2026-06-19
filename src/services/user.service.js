import apiClient from "./api.service";

const userService = {
  getProfile() {
    return apiClient.get("/user/profile");
  },
  getNotifications() {
    return apiClient.get("/user/notifications");
  },
  updateProfile(data) {
    return apiClient.put("/user/profile", data);
  },
};

export default userService;
