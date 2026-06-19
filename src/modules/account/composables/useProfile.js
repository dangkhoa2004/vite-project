import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.store';

export function useProfile() {
    const userStore = useUserStore();
    // Lấy profile và trạng thái loading từ Store
    const { profile, isLoading: isSaving } = storeToRefs(userStore);
    
    const skillInput = ref('');

    // Khởi tạo model dữ liệu cho form
    const userInfo = ref({
        name: '', 
        email: '', 
        phone: '',
        role: '', 
        avatar: '', 
        bio: '',
        privacy: { phone: false, email: true },
        skills: [],
        socials: { 
            github: '', 
            linkedin: '', 
            website: '' 
        }
    });

    // Đồng bộ dữ liệu từ Store vào form khi profile thay đổi
    watch(profile, (newProfile) => {
        if (newProfile) {
            userInfo.value = {
                name: newProfile.fullName || '',
                email: newProfile.email || '',
                phone: newProfile.phone || '',
                role: newProfile.headline || '',
                avatar: newProfile.avatar || '',
                bio: newProfile.bio || '',
                privacy: { phone: false, email: true }, // Mặc định nếu backend chưa có logic này
                skills: Array.isArray(newProfile.skills) ? [...newProfile.skills] : [],
                socials: {
                    github: newProfile.socialLinks?.github || '',
                    linkedin: newProfile.socialLinks?.linkedin || '',
                    website: newProfile.socialLinks?.website || ''
                }
            };
        }
    }, { immediate: true });

    // Load dữ liệu khi component khởi tạo
    // onMounted(async () => {
    //     await userStore.fetchUserProfile();
    // });

    // Xử lý Kỹ năng
    const addSkill = () => {
        const skill = skillInput.value.trim();
        if (skill && !userInfo.value.skills.includes(skill) && userInfo.value.skills.length < 10) {
            userInfo.value.skills.push(skill);
        }
        skillInput.value = '';
    };

    const removeSkill = (idx) => {
        userInfo.value.skills.splice(idx, 1);
    };

    // Xử lý lưu hồ sơ
    const handleSaveProfile = async () => {
        try {
            await userStore.updateProfile(userInfo.value);
            alert('Đã cập nhật hồ sơ thành công!');
        } catch (error) {
            alert('Có lỗi xảy ra khi cập nhật hồ sơ.');
        }
    };

    // Xử lý upload ảnh (Hàm này có thể mở rộng gọi API upload sau)
    const handleAvatarUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Logic tạm thời: tạo preview, sau này gắn logic upload file ở đây
            userInfo.value.avatar = URL.createObjectURL(file);
        }
    };

    return {
        userInfo,
        skillInput,
        isSaving,
        addSkill,
        removeSkill,
        handleSaveProfile,
        handleAvatarUpload
    };
}