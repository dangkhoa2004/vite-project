<template>
    <div class="bg-red-500/5 backdrop-blur-xl border border-red-500/20 rounded-[24px] shadow-sm p-6 md:p-8">
        <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center text-lg shadow-sm border border-red-500/20">
                <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <h2 class="text-xl font-bold text-red-500">Vùng nguy hiểm</h2>
        </div>
        
        <p class="text-[13px] text-[var(--text-primary)] font-medium mb-2">Bạn có chắc chắn muốn xóa tài khoản?</p>
        <p class="text-[13px] text-[var(--text-secondary)] mb-6 leading-relaxed">
            Hành động này sẽ xóa vĩnh viễn tài khoản của bạn khỏi hệ thống EduPlatform. Toàn bộ tiến độ học tập, chứng chỉ và các khóa học đã mua sẽ bị mất. <b>Dữ liệu không thể khôi phục lại sau khi xóa.</b>
        </p>

        <button class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-[13px] font-bold rounded-xl shadow-md transition-all">
            Xóa tài khoản vĩnh viễn
        </button>
    </div>
</template>