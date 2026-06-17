<template>
    <div class="space-y-6">
        <div class="flex flex-wrap gap-3 border-b border-[var(--border-color)] pb-5">
            <button @click="subTab = 'qa'" 
                :class="['px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all', 
                subTab === 'qa' ? 'bg-blue-600 text-white shadow-md' : 'border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]']">
                <i class="fa-solid fa-comments mr-1.5"></i> Hỏi Đáp (Q&A)
            </button>
            <button @click="subTab = 'announcements'" 
                :class="['px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all', 
                subTab === 'announcements' ? 'bg-blue-600 text-white shadow-md' : 'border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]']">
                <i class="fa-solid fa-bullhorn mr-1.5"></i> Thông báo
            </button>
            <button @click="subTab = 'grading'" 
                :class="['relative px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all', 
                subTab === 'grading' ? 'bg-blue-600 text-white shadow-md' : 'border border-[var(--border-color)] bg-[var(--bg-app)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]']">
                <i class="fa-solid fa-check-to-slot mr-1.5"></i> Chấm điểm tự luận
                <span class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-extrabold shadow-sm border-2 border-[var(--bg-card)]">5</span>
            </button>
        </div>

        <div class="relative min-h-[400px]">
            
            <div v-if="subTab === 'qa'" class="space-y-5 animate-fade-in">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[var(--bg-app)] p-4 rounded-2xl border border-[var(--border-color)]">
                    <h3 class="text-[14px] font-bold flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        Câu hỏi đang chờ (2)
                    </h3>
                    <div class="relative w-full sm:w-72">
                        <input type="text" placeholder="Tìm kiếm câu hỏi..." class="w-full h-10 pl-9 pr-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all" />
                        <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] text-[12px]"></i>
                    </div>
                </div>

                <div class="space-y-4">
                    <div v-for="q in questions" :key="q.id" class="border border-[var(--border-color)] bg-[var(--bg-app)] rounded-2xl p-5 flex gap-4 shadow-sm hover:border-blue-500/30 transition-colors">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-500 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-500/20">
                            {{ q.name.charAt(0) }}
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <h4 class="text-[14px] font-bold text-[var(--text-primary)]">{{ q.name }}</h4>
                                    <p class="text-[11px] text-blue-500 font-medium mt-0.5 truncate">{{ q.lesson }}</p>
                                </div>
                                <div class="flex gap-2 shrink-0">
                                    <span class="text-[10px] text-[var(--text-secondary)] mr-2 mt-1">{{ q.time }}</span>
                                    <button class="w-7 h-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-[10px] text-[var(--text-secondary)] hover:text-orange-400 hover:border-orange-400/30 transition-all tooltip" title="Ghim lên đầu"><i class="fa-solid fa-thumbtack"></i></button>
                                    <button class="w-7 h-7 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg text-[10px] text-[var(--text-secondary)] hover:text-emerald-500 hover:border-emerald-500/30 transition-all tooltip" title="Đánh dấu đã trả lời"><i class="fa-solid fa-check"></i></button>
                                </div>
                            </div>
                            
                            <p class="text-[13px] mt-3 bg-[var(--bg-card)]/80 p-4 rounded-xl border border-[var(--border-color)] leading-relaxed shadow-inner">
                                {{ q.content }}
                            </p>
                            
                            <div class="mt-4 flex gap-3">
                                <div class="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-sm">GV</div>
                                <div class="flex-1 flex gap-2">
                                    <textarea rows="1" placeholder="Nhập câu trả lời của bạn..." class="flex-1 py-2.5 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 resize-none overflow-hidden h-10 transition-all"></textarea>
                                    <button class="h-10 px-5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[12px] font-bold shadow-md transition-all flex items-center gap-2">
                                        <i class="fa-solid fa-paper-plane text-[10px]"></i> Gửi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="subTab === 'announcements'" class="space-y-6 animate-fade-in">
                <div class="bg-gradient-to-br from-blue-500/10 to-[var(--bg-app)] border border-blue-500/20 p-6 rounded-2xl shadow-sm">
                    <h3 class="text-[15px] font-bold mb-4 text-blue-500"><i class="fa-solid fa-paper-plane mr-2"></i>Gửi thông báo mới</h3>
                    <input type="text" placeholder="Tiêu đề thông báo..." class="w-full h-11 px-4 mb-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500" />
                    <textarea rows="4" placeholder="Nội dung thông báo (hỗ trợ Markdown)..." class="w-full p-4 mb-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 resize-none"></textarea>
                    <div class="flex justify-between items-center border-t border-[var(--border-color)]/50 pt-4">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 rounded text-blue-600 bg-[var(--bg-card)] border-[var(--border-color)]">
                            <span class="text-[12px] font-medium text-[var(--text-secondary)]">Gửi kèm Email cho học viên</span>
                        </label>
                        <button class="px-6 py-2.5 bg-blue-600 text-white text-[12px] font-bold rounded-xl shadow-md hover:bg-blue-500 transition-all">Phát sóng thông báo</button>
                    </div>
                </div>
            </div>

            <div v-if="subTab === 'grading'" class="flex flex-col items-center justify-center py-16 animate-fade-in bg-[var(--bg-app)] rounded-2xl border border-[var(--border-color)] border-dashed">
                <i class="fa-solid fa-laptop-code text-5xl text-[var(--text-secondary)] mb-4 opacity-50"></i>
                <h3 class="text-[16px] font-bold">Khu vực chấm bài tập tự luận</h3>
                <p class="text-[13px] text-[var(--text-secondary)] mt-2">Hệ thống đang đồng bộ bài nộp của sinh viên. Vui lòng quay lại sau.</p>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const subTab = ref('qa');

const questions = ref([
    {
        id: 1,
        name: 'Nguyễn Văn A',
        lesson: 'Chương 2 - Bài 4: Lifecycle Hooks trong Vue 3',
        time: '2 giờ trước',
        content: 'Thầy ơi, khi nào thì mình nên dùng onMounted và khi nào dùng created ạ? Em dùng Setup script thì vòng đời nó chạy như thế nào? Cảm ơn thầy!'
    },
    {
        id: 2,
        name: 'Trần Thị B',
        lesson: 'Chương 4 - Bài 1: Cấu hình Pinia Store',
        time: '5 giờ trước',
        content: 'Cho em hỏi nếu app lớn thì mình nên chia module trong Pinia như thế nào cho chuẩn ạ? Em đọc docs chưa hiểu đoạn mapActions lắm.'
    }
]);
</script>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
}
</style>