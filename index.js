function handleSubmit () {
 
    $('.js-get-dog').on('click', event => {
        event.preventDefault();
        let breed = $('.js-breed-input').val();
        getPug(breed);
    })
}

function getPug (breed) {
    fetch (`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.status != 'success') {
                alert(`Error: ${responseJson.code}, ${responseJson.message}.`);
            }
            else{
                pugHtml = `<img src='${responseJson.message}' alt='random pug'>`;
                $('.js-result').html(pugHtml);
            }
        })
        .catch(error => {
            alert('Connection interrupted!');
        });
}

$(handleSubmit);