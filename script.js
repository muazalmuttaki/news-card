const mainImage = document.getElementById('mainImage');
const imgInput = document.getElementById('imgInput');

function uploadImage() {
    imgInput.click();
}

imgInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            mainImage.src = e.target.result;

            // Placeholder class remove → border চলে যাবে
            mainImage.classList.remove('placeholder');
        }
        reader.readAsDataURL(file);
    }
});

function downloadPNG() {
    html2canvas(document.getElementById('card'), { scale: 2 }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'news-card.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}


