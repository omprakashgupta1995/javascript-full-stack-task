document.addEventListener("DOMContentLoaded", function () {
    if (location.pathname.includes("/admin")) {
        sendApi("GET", "/user").then(function (response) {
            var data = response;
            renderUser(data);
        }).catch(function (error) {

        });
    } else if (location.pathname.includes("/update/")) {
        var userid = location.pathname.split("/")[2]
        sendApi("GET", "/user/" + userid).then(function (response) {
            var data = response;
            console.log(data);
            schema.value = data;
            initFormSchema(schema);
            // renderUserFormData(data);
        }).catch(function (error) {

        });
    }else {
        initFormSchema(schema);
    }
});