
jQuery.post("/api/products", {
  "title": "My Awesome T-shirt",
  "description": "All about the details. Of course it's black.",
  "style": "12345"
}, function (data, textStatus, jqXHR) {
    console.log("Post resposne:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
});
