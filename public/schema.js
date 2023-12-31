const schema = {
    schema: {
        firstName: {
            title: 'First Name',
            required: true
        },
        lastName: {
            type: 'string',
            title: 'Last Name',
            required: true,
        },
        age: {
            title: 'Age',
            required: true
        },
        gender: {
            type: 'select',
            title: 'Gender',
            required: true,
            enum: ["Male", "Female", "Other"],
        },
        isDisabled: {
            type: 'boolean',
            title: 'Is Disabled',
        },
        healthIssue: {
            "type": "checkboxes",
            "title": "Pls select the health issue",
            "items": {
                "type": "string",
                "title": "Option",
                "enum": ["Heart disease", "Cancer", "Lung disease", "Diabetes", "Kidney disease"]
            }
        },
        maritalStatus: {
            type: "string",
            title: 'Marital Status',
            required: true,
            enum: ["Single", "Married", "Divorced", "Widowed"],
            // default : "Single"
        }
    },
    form: [
        {
            key: "firstName",
            type: "text"
        },
        {
            key: "lastName",
            type: "text"
        },
        {
            key: "age",
            type: 'number',
        },
        {
            key: "gender",
        },
        {
            key: "isDisabled",
            inline: true,
            "inlinetitle": "Are you disabled"

        },
        {
            key: "healthIssue",
            inline: true
        },
        {
            "key": "maritalStatus",
            "type": "radiobuttons",
            "activeClass": "btn-success"
        }, {
            type: "submit",
            title: "Submit"
        }
    ],
    onSubmit: function (errors, values) {
        console.log(errors, values);
        if (errors) {
            errors.forEach(function (eachError) { });
            $('#res').html();
        }
        else {
            $('#res').html(JSON.stringify(values));
            if (location.pathname.includes("/update/")) {
                sendApi("PUT", "/user/" + location.pathname.split("/")[2], values).then(function (data) {
                    console.log("Form Submitted", data);
                }).catch(function (err) {
                    alert(err.message)
                });
            } else {
                sendApi("POST", "/user", values).then(function (data) {
                    console.log("Form Submitted", data);
                }).catch(function (err) {
                    alert(err.message)
                });
            }
        }
    }
}