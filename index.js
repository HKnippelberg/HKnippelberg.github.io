function menu() {
    document.getElementById("menu").classList.toggle("active");
}

function scrollToSection() {
    document.getElementById('contact-menu').scrollIntoView({ behavior: 'smooth' });
}

function generate() {
    const color = document.getElementById('colorInput').value;
    const imageInput = document.getElementById('imageInput');
    const qrContainer = $('#qr-container');
    const qrCodeText = "https://example.com"; // Replace with your desired QR code text

    // Clear the QR code container
    qrContainer.empty();

    // Generate QR code
    qrContainer.qrcode({
        text: qrCodeText,
        width: 256,
        height: 256,
        foreground: color,
        background: "#ffffff",
    });

    // Add the image if provided
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const canvas = qrContainer.find('canvas')[0];
                const ctx = canvas.getContext('2d');
                const qrSize = canvas.width;

                // Draw the image in the center of the QR code
                const imgSize = qrSize / 4; // Adjust size as needed
                ctx.drawImage(img, (qrSize - imgSize) / 2, (qrSize - imgSize) / 2, imgSize, imgSize);
            };
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
}
