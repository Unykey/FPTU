// Load external HTML content
document.addEventListener("DOMContentLoaded", function () {
    // Load the header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load the footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

function upDate(previewPic)
{
    const chuyenNganh = document.getElementById("ChuyenNganh");
    chuyenNganh.style.backgroundImage = `url(${previewPic})`;
}

function unDo()
{
    const chuyenNganh = document.getElementById("ChuyenNganh");
    chuyenNganh.style.backgroundImage = `url(images/Bannerweb-K20.png)`;
}