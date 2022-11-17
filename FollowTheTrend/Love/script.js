const setName = () => {
    let url = new URL(document.location)
    let name = "Bội Linh"
    if (url.searchParams.has('name')) {
        name = decodeURI(atob(decodeURI(url.searchParams.get('name'))));
    }
    $('#name').children().first().text(name);
};

$(document).ready(function () {
    setName();

    $('#help').on('click', function () {
        $('#intro-background').fadeIn();
        $('#intro').slideDown();
    });

    $('#intro-close').on('click', function () {
        $('#intro').slideUp();
        $('#intro-background').fadeOut();
    });

    $('#share').on('click', function () {
        let url = new URL(document.location)
        url.searchParams.set('name', encodeURI(btoa(encodeURI($('#name').text().trim()))));
        try {
            navigator.clipboard.writeText(url.href);

            $(this).children().first().fadeToggle(function () {
                $(this).next().fadeToggle().delay(1000).fadeToggle(function () {
                    $(this).prev().fadeToggle();
                });
            });
        }
        catch {
            $('#sharelink-content > input').val(url.href);
            $('#sharelink-background').fadeIn();
            $('#sharelink').slideDown();
        }
    });

    $('#sharelink-close').on('click', function () {
        $('#sharelink').slideUp();
        $('#sharelink-background').fadeOut();
    });
});
