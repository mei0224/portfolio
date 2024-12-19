let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;

function moveSlide(direction) {
    const gallery = document.querySelector('.gallery');

    // 画像が最初または最後に到達した場合、スライドしない
    if (direction === 'prev') {
        if (currentIndex > 0) {
            currentIndex--;
        }
    } else if (direction === 'next') {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        }
    }

    // ギャラリーの位置を変更
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;  // 1枚ごとにスライドする

    // 次へ、前へボタンの状態を更新
    updateButtons();
}

function updateButtons() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    // 最初の画像で前へボタンを無効化
    if (currentIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // 最後の画像で次へボタンを無効化
    if (currentIndex === totalImages - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// ボタンのクリックイベントをリスンして、moveSlideを呼び出す
document.querySelector('.prev-button').addEventListener('click', function() {
    moveSlide('prev');
});

document.querySelector('.next-button').addEventListener('click', function() {
    moveSlide('next');
});
