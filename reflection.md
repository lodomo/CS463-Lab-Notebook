# Reflection Document

## HTML

1. Were you able to complete the exercises on your own or did you use the
videos or the solutions for help?

I used the videos and the solutions for help.

2. How helpful did you find the exercises in this section? Was there one
exercise that was particularly helpful?

Very helpful. The tables are something I've always been uncomfortable with and feel a bit better now.

3. Was there something that you wish had been explained better?

Everything was explained well.

4. Were there other exercises that might have helped you learn this week’s
topic a little better?

I think the exercises were good, taking notes throughout the exercises helped me a lot.

### Notes while I was working:

#### Lists

- `<ul>`: unordered list
- `<ol>`: ordered list
- `<li>`: list item
- If a list is nested, the nested list is inside the `<li>` tag of the parent list.

#### Images

- `<figure>`: container for an image
- `<figcaption>`: caption for an image
- `<img>`: image tag, does not have a closing tag, ends with `/>`
  - `src`: source attribute, specifies the URL of the image
  - `alt`: alternative text, make sure it's descriptive
  - `width` and `height`: specify the dimensions of the image to prevent layout shifts

#### Table

- `<table>`: table tag
  - `<thead>`: table head, contains the title for each column
    - `<tr>`: table row, contains the data for each column
      - `<th>`: table header, contains the title for each column
  - `<tbody>`: table body, contains the data
    - `<tr>`: Repeating this but it is also used in the body
      - `<td>`: table data, contains the data for the cell
        - colspan: attribute that specifies the number of columns a cell should span
        - rowspan: attribute that specifies the number of rows a cell should span

#### Form

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

1. Were you able to complete the exercises on your own or did you use the
videos or the solutions for help?

I was able to complete this all with the previous exercises, and wave. I double checked with the solutions.

2. How helpful did you find the exercises in this section? Was there one
exercise that was particularly helpful?

I think if I had not done the previous exercises, this would have been a bit more difficult. This week was very easy for me.

3. Was there something that you wish had been explained better?

No, everything was explained well.

4. Were there other exercises that might have helped you learn this week’s
topic a little better?

Joined with the discussion of looking at WAVE, I think this was a good week.

## CSS

1. Were you able to complete the exercises on your own or did you use the
videos or the solutions for help?
- Part 1: I had to reference the solutions and the powerpoints.
- Part 2: Easy.
- Part 3: References the powerpoints. I think I understand it.
- Part 4: It works when the window doesn't change sizes. I don't think that's good.
- Part 5: My solution matches the picture, but there's quite a few differences compared to the solution file. I'd guess because there's multiple ways to do the same thing?
- Part 6: Referenced notes from lecture, and powerpoints. Double checked with the solution.

2. How helpful did you find the exercises in this section? Was there one
exercise that was particularly helpful?
- Part 1, I just felt like "why would anyone do something like this?", but that usually means I'll need it one day.
- Part 5 playing with different ways to place elements was helpful. I'm interested in playing with this more.
- Part 6, I liked the challenge of keeping the HTML the same and only changing the CSS. After all the other exercises, this one really came together smoothly.

3. Was there something that you wish had been explained better?

Part 3 and the specificity of CSS. I understand it, but it feels like problems that can be avoided by properly using classes? I'm not sure if that's the right way to think about it.

4. Were there other exercises that might have helped you learn this week’s
topic a little better?

All good so far!

## Flexbox

1. Were you able to complete the exercises on your own or did you use the
videos or the solutions for help?
- I got until the 5th one, and then I had to look at solutions. I assumed there was a math trick going on. It was just brute force...

2. How helpful did you find the exercises in this section? Was there one
exercise that was particularly helpful?
- All were good examples, I'll be keeping this as reference for a long time

3. Was there something that you wish had been explained better?
- No

4. Were there other exercises that might have helped you learn this week’s
topic a little better?
- Honestly, that flexbox froggy game from lecture is going to be something I play with to get a better understanding.

## CSS Grid

1. Were you able to complete the exercises on your own or did you use the
videos or the solutions for help?
- Heavily relied on the solutions for help. My brain is having a hard time with this one.

2. How helpful did you find the exercises in this section? Was there one
exercise that was particularly helpful?
- The second part with the grid-template-areas is very cool. I still had to look at the solutions, but I'm glad to have this in my pocket for web dev.

3. Was there something that you wish had been explained better?
- I honestly don't know. Something about this week didn't click for me. I hope more time with it will help.

4. Were there other exercises that might have helped you learn this week’s
topic a little better?
- I don't know.

## Bootstrap

1. Were you able to complete the exercises on your own or did you use the
videos or the solutions for help?
- Part 1: Looked at the solutions because the slides didn't cover cards, Heavily relied on the solution on this one.
I compared the solution to the bootstrap documentation to understand the classes better. Definitely need to play with this more.
- Part 2, and 3: Very intuitive after the lecture. I didn't need to look at the solutions. Really really cool stuff.
- Part 4: Heavily relied on the solution. Added some of my own CSS. Used the solution as reference of what to look into for the documentation.


2. How helpful did you find the exercises in this section? Was there one
exercise that was particularly helpful?
- I think the grid was my favorite. I hate how modals are used on the web, but I'm glad to know how to make them now.

3. Was there something that you wish had been explained better?
- I think understanding clearly that you don't "install" bootstrap. I was confused about that for a bit. I missed part of one of the lectures so maybe it's just me.

4. Were there other exercises that might have helped you learn this week’s
topic a little better?
- I think this was a good little intro to bootstrap, definitely way different than anything else I've used before.

## Javascript

1. Were you able to complete the exercises on your own or did you use the
videos or the solutions for help?
- TODO

2. How helpful did you find the exercises in this section? Was there one
exercise that was particularly helpful?
- TODO

3. Was there something that you wish had been explained better?
- TODO

4. Were there other exercises that might have helped you learn this week’s
topic a little better?
- TODO

## JQuery
1. Were you able to complete the exercises on your own or did you use the
videos or the solutions for help?
- TODO

2. How helpful did you find the exercises in this section? Was there one
exercise that was particularly helpful?
- TODO

3. Was there something that you wish had been explained better?
- TODO

4. Were there other exercises that might have helped you learn this week’s
topic a little better?
- TODO


- TODO
