// let productsData = JSON.parse(localStorage.getItem('productsData'))

$(document).ready(function(){
    $('#search').keyup(function(){
        $('.autocomplete').html('');
        var searchField = $('#search').val().toLowerCase();
        var expression = new RegExp(searchField, "i");

        // Flag to check if any matching item is found
        var found = false;

        // Ẩn .autocomplete nếu ô tìm kiếm trống
        if (searchField === '') {
            $('.autocomplete').css('display', 'none');
            return; // Ngừng thực hiện thêm logic nếu ô tìm kiếm trống
        }

        $.each(productsData, function(key, value){
            if (value.name.toLowerCase().search(expression) != -1 || value.category.toLowerCase().search(expression) != -1)
            {
                // Append the link for each matching item
                if (window.location.pathname.includes("login"))
                {
                    var path = 'detail-login.html?id='+ value.id;
                }
                else
                {
                    var path = 'detail.html?id='+ value.id
                }
                $('.autocomplete').append('<a href="'+path+'"><li><img style="display:none" src="'+value.imgSrc+'" height="40" width="40" class="" />'+value.name+'</li></a>');
                found = true;
            }
        });

        console.log(searchField);

        // Update display based on whether any matching item is found
        if (found) {
            $('.autocomplete').css('display', 'block');
        } else {
            $('.autocomplete').css('display', 'none');
        }
    });

    $('.autocomplete').on('click', 'li', function() {
        // Get the text or data attribute based on your implementation
        var selectedItemText = $(this).text();
        $('#search').val($.trim(selectedItemText));

        // Clear autocomplete and hide it
        $('.autocomplete').empty().css('display', 'none');
    });
});