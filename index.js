const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // 1. Убираем класс "activity" И "no-activity" со всех элементов
        navItems.forEach(otherItem => {
            otherItem.classList.remove('activity', 'no-activity');
            otherItem.classList.add('no-activity'); // Возвращаем no-activity
        });

        // 2. Добавляем класс "activity" только к нажатому элементу
        this.classList.remove('no-activity'); // Убираем no-activity с активного
        this.classList.add('activity');
    });
});

