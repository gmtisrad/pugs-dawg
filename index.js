function handleSubmit () {
    $('.js-get-dog').on('click', event => {
        event.preventDefault();
        getPug();
    })
}

function getPug () {
    fetch ('https://dog.ceo/api/breed/pug/images/random')
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