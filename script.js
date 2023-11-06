document.addEventListener("DOMContentLoaded", function(){

    fetch('./JSON/kurtcobain.json')

        .then(response => response.json())
        .then(data => {
            
            let kurtcobain = '';

            data.KurtCobain.forEach(kurt => {
                kurtcobain += ` <img src="./img/${kurt.Image}"> `;
            });
            document.getElementById('main').innerHTML = kurtcobain;
        })
        .catch(error = console.error('Error to load the images: ', error));
});
