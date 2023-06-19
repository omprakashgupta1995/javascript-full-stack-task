// You've got two options in order to plug your JSON Schema:
//   1. Provide a URL to a JSON Schema.
//   2. Directly assign an object following the JSON Schema format.

// const schema = 'http://landarltracker.com/schemas/test.json';
// const schema = {
//     title: 'The Root Form Element',
//     description: 'Easy, right?',
//     type: 'string',
// };
const schema = {
    "title": "The Registration Form",
    "description": "Registration form description",
    "type": "object",
    "properties": {
        "firstName": {
            type: "string",
            "title": "First Name",
            // "description": "First name",
            "required": false,
        },
        "lastName": {
            type: "string",
            "title": "Last Name",
            // "description": "Last name",
            "required": false,
        },
        "gender": {
            type: "string",
            title: "Gender",
            objectSubstitute : 'Group',
            description: "Using const",
            oneOf: [
                { const: "M", title: "Male" },
                { const: "F", title: "Female" },
                { const: "O", title: "Other" }
            ]
        },
        "isHandle": {
            "type": "boolean",
            "enum" : ["true", ""]
        }
    }
}
// Also, you can define the form behavior on submission, e.g.:
const submitCallback = (rootFormElement) => {
    // Show the resulting JSON instance in your page.
    document.getElementById('json-result').innerText = JSON.stringify(
        rootFormElement.getInstance(),
        null,
        2
    );
    // (For testing purposes, return false to prevent automatic redirect.)
    return false;
};

// Finally, get your form...
const jsonSchemaForm = JsonSchemaForms.build(schema, submitCallback);

// ... and attach it somewhere to your page.
window.addEventListener('load', () => {
    console.log(jsonSchemaForm);
    document.getElementById('form-container').appendChild(jsonSchemaForm);
});