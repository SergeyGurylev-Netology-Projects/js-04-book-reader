const bookElement = document.getElementById('book');

Array.from(document.querySelector('.book__control_font-size').querySelectorAll('.font-size')).forEach(
    el => el.addEventListener('click', onClickFontSizeControl)
);

Array.from(document.querySelector('.book__control_color').querySelectorAll('.color')).forEach(
    el => el.addEventListener('click', onClickFontColorControl)
);

Array.from(document.querySelector('.book__control_background').querySelectorAll('.color')).forEach(
    el => el.addEventListener('click', onClickBackgroundColorControl)
);

function onClickFontSizeControl(e) {
    const activeElement = this.closest('.book__control_font-size').querySelector('.font-size_active');

    if (activeElement !== this) {
        activeElement.classList.remove('font-size_active');
        this.classList.add('font-size_active');

        let size = activeElement.dataset.size;
        if (size) bookElement.classList.remove('book_fs-' + size);

        size = this.dataset.size;
        if (size) bookElement.classList.add('book_fs-' + size);
    }

    e.preventDefault();
    return false;
}

function onClickFontColorControl(e) {
    const activeElement = this.closest('.book__control_color').querySelector('.color_active');

    if (activeElement !== this) {
        activeElement.classList.remove('color_active');
        this.classList.add('color_active');

        bookElement.classList.remove('book_color-' + activeElement.dataset.textColor);
        bookElement.classList.add('book_color-' + this.dataset.textColor);
    }

    e.preventDefault();
    return false;
}

function onClickBackgroundColorControl(e) {
    const activeElement = this.closest('.book__control_background').querySelector('.color_active');

    if (activeElement !== this) {
        activeElement.classList.remove('color_active');
        this.classList.add('color_active');

        bookElement.classList.remove('book_bg-' + activeElement.dataset.bgColor);
        bookElement.classList.add('book_bg-' + this.dataset.bgColor);
    }

    e.preventDefault();
    return false;
}
