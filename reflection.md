# Reflection Document

## HTML

These exercises were all pretty straight forward. I had to look up some of the tags
and attributes but I think with practice I'll get better at remembering them. For
each section, I'll write down some quick references for myself and any notes I think
will be handy for future me.

### Lists

- `<ul>`: unordered list
- `<ol>`: ordered list
- `<li>`: list item
- If a list is nested, the nested list is inside the `<li>` tag of the parent list.

### Images

- `<figure>`: container for an image
- `<figcaption>`: caption for an image
- `<img>`: image tag, does not have a closing tag, ends with `/>`
  - `src`: source attribute, specifies the URL of the image
  - `alt`: alternative text, make sure it's descriptive
  - `width` and `height`: specify the dimensions of the image to prevent layout shifts

### Table

Tables are written row-first, column-second. Even checking my code against the code-samples it took me
a long time to really understand what is going on. I'll definitely need more practice with tables.

- `<table>`: table tag
  - `<thead>`: table head, contains the title for each column
    - `<tr>`: table row, contains the data for each column
      - `<th>`: table header, contains the title for each column
  - `<tbody>`: table body, contains the data
    - `<tr>`: Repeating this but it is also used in the body
      - `<td>`: table data, contains the data for the cell
        - colspan: attribute that specifies the number of columns a cell should span
        - rowspan: attribute that specifies the number of rows a cell should span

### Form

Forms are also hard for me to read, I think with practice I'll get better.
For now, here are some more quick references I'm sure I'll read all term.

- `<form>`: form tag, starts the form.
  - `action`: attribute that links where the form data will be sent
- `<div>`: Not specifically a form element but it is used to group labels and inputs.
  - `<label>`: label tag, will display the text for the input between the opening and closing tags
    - `for`: attribute that needs to match the `id` of the input it is labeling
  - `<input>`: input tag, used to create an input field
    - `type`: attribute that specifies the type of input, there's a lot of types.
      - (some) Types: text, password, radio, checkbox, submit, reset, file, date, email.
    - `id`: attribute that needs to match the `for` of the label. Internal to the form.
    - `name`: attribute to describe the field, used when sending the form data.
      - For radio, it will break the form if the `name` is not the same.
      - For checkbox, it will keep the data grouped if the `name` is the same.
    - `value`: attribute to set the default value of the input. For radio and checkbox, it is the value that will be sent if the input is checked.
  - `<fieldset>`: groups related elements in a form (This is what makes the box around the radio/checkbox inputs)
    - `<legend>`: provides a human readable title for the fieldset
- `<br/>`: line break tag, used to create a new line in the form, and add space between elements. I assume this should really be CSS but it was in the sample solution.

## Accessibility

- TODO

## CSS

- TODO

## Flexbox

- TODO

## CSS Grid

- TODO

## Bootstrap

- TODO

## Javascript

- TODO

## JQuery

- TODO
