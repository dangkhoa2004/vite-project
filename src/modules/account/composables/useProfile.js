import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user.store';
import { useOrderStore } from '@/stores/order.store'; // THÊM: Import store giao dịch

export function useProfile() {
    const userStore = useUserStore();
    const orderStore = useOrderStore(); // THÊM: Khởi tạo store giao dịch
    
    // Lấy state từ Store
    const { profile, isLoading: isSaving } = storeToRefs(userStore);
    const { orderHistory, isLoading: isLoadingOrders } = storeToRefs(orderStore);
    
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
                privacy: { phone: false, email: true }, 
                skills: Array.isArray(newProfile.skills) ? [...newProfile.skills] : [],
                socials: {
                    github: newProfile.socialLinks?.github || '',
                    linkedin: newProfile.socialLinks?.linkedin || '',
                    website: newProfile.socialLinks?.website || ''
                }
            };
        }
    }, { immediate: true });

    // Các hàm xử lý Profile hiện tại
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

    const handleSaveProfile = async () => {
        try {
            await userStore.updateProfile(userInfo.value);
            alert('Đã cập nhật hồ sơ thành công!');
        } catch (error) {
            alert('Có lỗi xảy ra khi cập nhật hồ sơ.');
        }
    };

    const handleAvatarUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            userInfo.value.avatar = URL.createObjectURL(file);
        }
    };

    // ==============================================
    // THÊM MỚI: LOGIC LẤY & FORMAT LỊCH SỬ GIAO DỊCH
    // ==============================================
    
    // Gọi API lấy lịch sử
    const loadTransactions = async () => {
        await orderStore.loadOrderHistory();
    };

    // Computed property map data API sang format của UI AccountBilling
    const transactions = ref([]);
    
    watch(orderHistory, (newHistory) => {
        if (!newHistory) return;
        
        transactions.value = newHistory.map(tx => {
            // Định dạng tiền tệ VNĐ
            const formattedAmount = new Intl.NumberFormat('vi-VN', { 
                style: 'currency', currency: 'VND' 
            }).format(tx.totalAmount);

            // Định dạng ngày tháng
            const dateObj = new Date(tx.createdAt);
            const formattedDate = dateObj.toLocaleDateString('vi-VN', { 
                day: '2-digit', month: '2-digit', year: 'numeric' 
            });

            // Map trạng thái
            let statusText = 'Thành công';
            if (tx.status === 'pending') statusText = 'Đang xử lý';
            else if (tx.status === 'failed') statusText = 'Thất bại';

            // Phân tích phương thức thanh toán để hiển thị icon phù hợp
            let methodText = tx.paymentMethod || 'Hệ thống';
            let iconClass = 'fa-building-columns';
            const methodLower = methodText.toLowerCase();

            if (methodLower.includes('momo')) {
                methodText = 'Momo Pay';
                iconClass = 'fa-wallet'; 
            } else if (methodLower.includes('vnpay')) {
                methodText = 'VNPay';
                iconClass = 'fa-building-columns';
            } else if (methodLower.includes('visa') || methodLower.includes('stripe')) {
                iconClass = 'fa-cc-visa';
            }

            // Tên khóa học (Nếu backend trả về items, lấy item đầu tiên)
            const courseName = (tx.items && tx.items.length > 0 && tx.items[0].course)
                ? tx.items[0].course.title
                : 'Thanh toán khóa học EduPlatform'; // Fallback nếu API chưa preload course

            return {
                id: `#ED-${String(tx.id).padStart(5, '0')}`, // VD: #ED-00012
                date: formattedDate,
                course: courseName,
                amount: formattedAmount,
                status: statusText,
                method: methodText,
                methodIcon: iconClass
            };
        });
    }, { immediate: true });

    return {
        userInfo,
        skillInput,
        isSaving,
        addSkill,
        removeSkill,
        handleSaveProfile,
        handleAvatarUpload,
        // Xuất thêm dữ liệu giao dịch
        transactions,
        isLoadingOrders,
        loadTransactions
    };
}