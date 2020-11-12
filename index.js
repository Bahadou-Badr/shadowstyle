function shadowstyle(options){
    let images = document.querySelectorAll('.stylesite')

    if(options.style_type === 'hard'){
        options.style_type = '0px'
    }
    else{
        options.style_type ='15px'
    }

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.style_type} 1px rgb(0,0,0,0.12)`;

        if (options.padding) {
            image.style.padding = '1em';
        }
    })
}
module.exports.shadowstyle = shadowstyle;