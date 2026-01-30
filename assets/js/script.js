document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".enaviya-header-search-container input");
    const resultBox = document.querySelector(".enaviya-header-search-container-result");

    searchInput.addEventListener("focus", () => {
        resultBox.classList.add("show");
    });

    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() !== "") {
            resultBox.classList.add("show");
        } else {
            resultBox.classList.remove("show");
        }
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".enaviya-header-search-container")) {
            resultBox.classList.remove("show");
        }
    });

    const sidebar = document.querySelector('.enaviya-sidebar');
    const toggleBtn = document.querySelector('.enaviya-sidebar-btn');

    function handleSidebar() {
        if (window.innerWidth < 768) {
            sidebar.classList.add('hide');
        } else {
            sidebar.classList.remove('hide');
        }
    }

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hide');
    });

    window.addEventListener('resize', handleSidebar);
    handleSidebar();
});
