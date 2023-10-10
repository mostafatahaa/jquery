// JQuery Ajax
$(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            format: "json"
        },
        error: function () {
            console.log("error")
        },
        success: function (data) {
            console.log("data", data)
        }
    });
});






