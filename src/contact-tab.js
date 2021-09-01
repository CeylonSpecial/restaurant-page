function contactTab(content) {
    const title = document.createElement('h1');
    title.id = 'contact-heading';
    title.textContent = 'Get In Touch!';

    const description = document.createElement('p');
    description.id = 'contact-desc';
    description.textContent = `Have a question or concern? Would you
    like to make a reservation for a large party or event? Please complete
    our contact form below and we'll be in touch as soon as possible!`

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(createForm());
}

function createForm() {
    const form = document.createElement('form');
    form.id = 'form';
    const inputs = ['Name', 'Email', 'Phone', 'Comments'];
    const submit = document.createElement('button');
    submit.textContent = 'Submit';
    submit.id = 'form-submit';

    inputs.forEach(function(input) {
        let field;
        if (input === 'Comments') {
            field = document.createElement('textarea');
            const label = document.createElement('label');
            label.htmlFor = input.toLowerCase();
            field.name = input.toLowerCase();
        } else {
            field = document.createElement('input');
        }
        field.placeholder = input;
        field.id = input.toLowerCase();
        form.appendChild(field);
    })
    form.appendChild(submit);
    return form;
}

export { contactTab }