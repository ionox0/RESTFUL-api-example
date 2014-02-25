
jQuery.get("/api/products/", function (data, textStatus, jqXHR) {
    console.log("Get resposne:");
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
});
