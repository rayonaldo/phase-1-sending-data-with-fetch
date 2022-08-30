// Add your code here
function submitData(nameArg, emailArg) {

    const formData = {

        name: nameArg,
        email: emailArg,

    }

    const configObject = {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
    };
    return fetch('http://localhost:3000/users', configObject)
            .then(response => response.json())
            .then(data => document.body.append(data.id))
            .catch(error => document.body.append(error));
} 
