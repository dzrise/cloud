$('form').submit(function(event) {
    data_form = $(this).serialize();
    // $.ajax({
    // url: "send.php",
    // type: "POST",
    // data: data_form,
    // dataType: "html",
    // success: funcS
    // });
    closeModals()
    return false;
});

function closeModals() {
    $.fancybox.close()
}