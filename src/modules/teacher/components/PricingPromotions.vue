<template>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div class="bg-[var(--bg-app)] border border-[var(--border-color)] p-6 rounded-2xl shadow-sm h-fit">
            <h3 class="text-[16px] font-bold border-b border-[var(--border-color)] pb-4 mb-5">Định giá sản phẩm</h3>
            
            <div class="flex gap-6 p-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)] mb-6">
                <label class="flex items-center gap-2.5 cursor-pointer group">
                    <input type="radio" name="price_type" class="w-4 h-4 text-blue-600 focus:ring-blue-500 bg-[var(--bg-app)] border-[var(--border-color)]">
                    <span class="text-[13px] font-semibold group-hover:text-blue-500 transition-colors">Miễn phí</span>
                </label>
                <label class="flex items-center gap-2.5 cursor-pointer group">
                    <input type="radio" name="price_type" checked class="w-4 h-4 text-blue-600 focus:ring-blue-500 bg-[var(--bg-app)] border-[var(--border-color)]">
                    <span class="text-[13px] font-bold text-blue-500">Có phí (Trang bán hàng)</span>
                </label>
            </div>

            <div class="grid grid-cols-2 gap-5">
                <div>
                    <label class="text-[11px] font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-2">Giá gốc (VND)</label>
                    <input type="text" value="650.000" class="w-full h-12 px-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[15px] font-bold outline-none focus:border-blue-500 transition-all" />
                </div>
                <div>
                    <label class="text-[11px] font-bold uppercase tracking-wider text-emerald-500 block mb-2">Giá khuyến mãi (VND)</label>
                    <div class="relative">
                        <input type="text" value="450.000" class="w-full h-12 px-4 rounded-xl border border-emerald-500/50 bg-emerald-500/5 text-[15px] text-emerald-500 font-extrabold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition-all" />
                        <i class="fa-solid fa-tag absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500/50"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-[var(--bg-app)] border border-[var(--border-color)] p-6 rounded-2xl shadow-sm">
            <div class="flex justify-between items-center border-b border-[var(--border-color)] pb-4 mb-5">
                <h3 class="text-[16px] font-bold">Mã giảm giá (Coupons)</h3>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-xl text-[12px] font-bold shadow-md hover:bg-blue-500 transition-all flex items-center gap-2">
                    <i class="fa-solid fa-plus text-[10px]"></i> Tạo mã mới
                </button>
            </div>

            <div class="overflow-x-auto rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                <table class="w-full text-[13px] text-left">
                    <thead class="bg-[var(--bg-app)] text-[var(--text-secondary)] text-[10px] uppercase font-extrabold tracking-wider">
                        <tr>
                            <th class="px-5 py-3 border-b border-[var(--border-color)]">Mã Code</th>
                            <th class="px-5 py-3 border-b border-[var(--border-color)]">Ưu đãi</th>
                            <th class="px-5 py-3 border-b border-[var(--border-color)]">Giới hạn</th>
                            <th class="px-5 py-3 border-b border-[var(--border-color)] text-right">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-[var(--border-color)]">
                        <tr class="hover:bg-[var(--bg-app)] transition-colors group">
                            <td class="px-5 py-3.5"><span class="font-extrabold text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">VUE3GIAM30</span></td>
                            <td class="px-5 py-3.5 font-bold text-emerald-500">-30%</td>
                            <td class="px-5 py-3.5 text-[12px] text-[var(--text-secondary)]">12/100 lượt<br><span class="text-red-400 text-[10px]">Còn 3 ngày</span></td>
                            <td class="px-5 py-3.5 text-right opacity-50 group-hover:opacity-100 transition-opacity">
                                <button class="w-8 h-8 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-blue-500 transition-colors tooltip"><i class="fa-solid fa-copy"></i></button>
                                <button class="w-8 h-8 rounded-lg hover:bg-red-500/10 text-[var(--text-secondary)] hover:text-red-500 transition-colors tooltip"><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>