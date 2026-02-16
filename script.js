$(document).ready(function () {

    $(`#button`).click(function
        () {
        var toAdd = $(`input[name=listItem]`).val();
        $(`ul`).append(`<li>` + toAdd + `</li>`);
            $(`input[name=listItem]`).val();
    }
    )
    $(document).on(`dblclick`, `li`, function () {
        $(this).toggleClass(`strick`).fadeOut(`slow`)
    })
    $(`input`).focus(function(){
        $(this).val(``);
    })
    
    $(`ul`).sortable();

})

