let lastScrollTop = 0; // 마지막 스크롤 위치
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // 현재 스크롤 위치

    if (currentScroll > lastScrollTop) {
        // 아래로 스크롤
        navbar.classList.add('hidden'); // 네비게이션 바 숨기기
    } else {
        // 위로 스크롤
        navbar.classList.remove('hidden'); // 네비게이션 바 보이기
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 마지막 스크롤 위치 업데이트
});
