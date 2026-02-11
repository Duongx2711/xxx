// Danh sách các link ảnh truyện của bạn
const pages = [
    "https://via.placeholder.com/800x1200?text=Page+1",
    "https://via.placeholder.com/800x1200?text=Page+2",
    "https://via.placeholder.com/800x1200?text=Page+3",
    "https://via.placeholder.com/800x1200?text=Page+4",
    "https://via.placeholder.com/800x1200?text=Page+5"
];

let currentPage = 0;

const mangaImage = document.getElementById('manga-page');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// Hàm cập nhật hiển thị
function updatePage() {
    mangaImage.src = pages[currentPage];
    pageInfo.innerText = `Trang ${currentPage + 1} / ${pages.length}`;
    
    // Vô hiệu hóa nút nếu ở đầu hoặc cuối
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;

    // Cuộn lên đầu trang khi chuyển trang mới
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sự kiện bấm nút
prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
});

// Hỗ trợ phím mũi tên
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
});

// Khởi tạo trang đầu tiên
updatePage();