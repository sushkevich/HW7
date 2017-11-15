(function () {


    document.getElementById('gallery').addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
        let imgUrl = event.target.currentSrc.split('/');
        let tag = document.createElement('img');
        tag.src = 'image/large/' + imgUrl[imgUrl.length - 1];

        document.getElementById('modal').appendChild(tag);
        document.getElementById('modal').style.zIndex = '20';
            document.getElementById('modal').style.opacity = '1';
        }
    });

    document.getElementById('modal').addEventListener('click', function () {
        let tag = document.querySelector('#modal img');
        document.getElementById('modal').removeChild(tag);
        document.getElementById('modal').style.zIndex = '-10';
        document.getElementById('modal').style.opacity = '0';
    })

}());
