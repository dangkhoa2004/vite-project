<template>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div class="xl:col-span-2 space-y-6">
            <div class="bg-[var(--bg-app)] border border-[var(--border-color)] p-6 rounded-2xl space-y-5 shadow-sm">
                <h3 class="text-[16px] font-bold border-b border-[var(--border-color)] pb-3">Thông tin cơ bản</h3>
                
                <div>
                    <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-2">Tiêu đề khóa học</label>
                    <input type="text" value="Vue.js 3 Masterclass & Tailwind CSS" class="w-full h-12 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[14px] font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                </div>
                
                <div>
                    <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-2">Mô tả ngắn</label>
                    <textarea rows="3" class="w-full p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none">Làm chủ framework Vue 3 mới nhất với Composition API, Pinia và xây dựng UI tốc độ với Tailwind CSS.</textarea>
                </div>

                <div>
                    <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-2">Danh mục</label>
                    <select class="w-full h-12 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] font-medium outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none cursor-pointer">
                        <option>💻 Lập trình Web / Frontend</option>
                        <option>⚙️ Lập trình Web / Backend</option>
                    </select>
                </div>
            </div>

            <div class="bg-gradient-to-br from-[var(--bg-app)] to-blue-500/5 border border-[var(--border-color)] p-6 rounded-2xl space-y-5 shadow-sm relative overflow-hidden">
                <i class="fa-brands fa-google absolute -right-4 -bottom-4 text-8xl text-[var(--text-secondary)] opacity-10"></i>
                <h3 class="text-[16px] font-bold border-b border-[var(--border-color)] pb-3 flex items-center gap-2">
                    <i class="fa-solid fa-magnifying-glass-chart text-blue-500"></i> Cấu hình SEO
                </h3>
                <div>
                    <label class="text-[11px] font-bold text-[var(--text-secondary)] block mb-1.5">Meta Title (Gợi ý < 60 ký tự)</label>
                    <input type="text" class="w-full h-11 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 transition-all" />
                </div>
                <div>
                    <label class="text-[11px] font-bold text-[var(--text-secondary)] block mb-1.5">Meta Description (150-160 ký tự)</label>
                    <textarea rows="2" class="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[13px] outline-none focus:border-blue-500 transition-all resize-none"></textarea>
                </div>
            </div>
        </div>

        <div class="space-y-6">
            <div class="border border-[var(--border-color)] rounded-2xl bg-[var(--bg-app)] p-5 shadow-sm">
                <h3 class="text-[14px] font-bold mb-4 flex items-center gap-2"><i class="fa-regular fa-image text-purple-500"></i> Ảnh bìa (Thumbnail)</h3>
                <div class="aspect-video bg-[var(--bg-card)] border-2 border-dashed border-[var(--border-color)] rounded-xl flex flex-col items-center justify-center text-[var(--text-secondary)] hover:border-purple-500 hover:text-purple-500 transition-colors cursor-pointer relative overflow-hidden group">
                    <img src="https://uploads.teachablecdn.com/attachments/eHsFVpGVQGWJ4elLNPen_vue-3-the-complete-guide.jpg" class="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity" />
                    <div class="relative z-10 flex flex-col items-center p-4 text-center">
                        <i class="fa-solid fa-cloud-arrow-up text-3xl mb-2 drop-shadow-md"></i>
                        <span class="text-[12px] font-bold bg-[var(--bg-card)]/80 backdrop-blur px-3 py-1 rounded-lg">Thay đổi ảnh</span>
                    </div>
                </div>
                <p class="text-[10px] text-center text-[var(--text-secondary)] mt-3">Định dạng JPG/PNG. Tỷ lệ 16:9.</p>
            </div>

            <div class="border border-[var(--border-color)] rounded-2xl bg-[var(--bg-app)] p-5 shadow-sm">
                <h3 class="text-[14px] font-bold mb-4 flex items-center gap-2"><i class="fa-solid fa-video text-rose-500"></i> Video giới thiệu (Promo)</h3>
                <div class="aspect-video bg-[var(--bg-card)] border-2 border-dashed border-[var(--border-color)] rounded-xl flex flex-col items-center justify-center text-[var(--text-secondary)] hover:border-rose-500 hover:bg-rose-500/5 transition-colors cursor-pointer group">
                    <div class="w-12 h-12 rounded-full bg-[var(--bg-app)] border border-[var(--border-color)] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-play text-rose-500 ml-1"></i>
                    </div>
                    <span class="text-[12px] font-bold">Tải lên Video MP4</span>
                </div>
            </div>
        </div>
    </div>
</template>