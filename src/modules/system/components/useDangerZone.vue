<template>
    <div class="bg-red-500/5 backdrop-blur-md rounded-[24px] border border-red-500/20 p-8 shadow-xl mt-4">
        <div class="flex items-center gap-3 mb-4">
            <i class="fa-solid fa-triangle-exclamation text-red-500 text-xl"></i>
            <h2 class="text-lg font-bold text-red-400">Vùng nguy hiểm</h2>
        </div>
        <p class="text-[13px] text-[var(--text-secondary)] mb-6">
            Hành động này sẽ xóa vĩnh viễn tài khoản của em, bao gồm toàn bộ tiến độ học tập, chứng chỉ
            và lịch sử giao dịch. Không thể khôi phục lại dữ liệu sau khi xóa.
        </p>

        <button
            class="px-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-[13px] font-bold rounded-xl transition-all">
            Xóa tài khoản vĩnh viễn
        </button>
    </div>
</template>