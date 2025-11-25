function navigate(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    if (page.id === pageId) {
      page.style.display = 'block';
      page.classList.add('active');
      // Анимация входа
      page.classList.remove('animate__fadeOut');
      page.classList.add('animate__fadeIn');
    } else {
      // Анимация выхода
      if (page.classList.contains('active')) {
        page.classList.remove('animate__fadeIn');
        page.classList.add('animate__fadeOut');
        // После анимации скрываем страницу
        setTimeout(() => {
          page.style.display = 'none';
          page.classList.remove('active');
        }, 500); // длительность анимации
      }
    }
  });
}