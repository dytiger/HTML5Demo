/**
 * Created by Administrator on 2016/6/8.
 */
function showPhoto(target) {
    var src = target.href;
    var photoTitle = target.title;
    var img = document.getElementById('photo');
    img.src = src;
    var p = img.nextElementSibling
    p.innerText = photoTitle;
}

function changePhotoStyle() {
    var img = document.getElementById('photo');
    if(img.className==''){
        img.className = 'photo';
    }else{
        img.className = '';
    }
}