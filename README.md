
# use-formidable

<div align="center">
    <div><br/></div>
    <img src="https://static.adzaria.co/miniatures/formidable.png" alt="use-wizard" width="200"/>
    <div><br/></div>
    <div>Having many big nested forms quickly leads to huge components, duplicates and hard-to-maintain code. useForm is a dead-easy-to-use lightweight react hook to handle big nested forms in an easy declarative way.</div>
    <div><br/></div>
        <div>Join on <a href="https://github.com/use-wizard/use-formidable" alt="GitHub">GitHub</a> to follow, test, raise issues and join !</div>
    <div><br/></div>
    <div>
        <img src="https://img.shields.io/badge/react-v16.13.x-brightgreen" />
        <img src="https://img.shields.io/badge/stage-ready-brightgreen" />
    </div>
    <div><br/></div>
</div>

# What does it do

* It handles deeply-nested complex data structure in a dead-easy declarative way, 
* It handles any kind of inputs (it turns checkboxes into booleans and handles files input),  
* It comes with a set of live modifiers and validators, and it lets you use custom validators,
* Types are included for typescript, it is lightweight and has no dependencies,
* Use it with [use-wizard](https://github.com/use-wizard/use-wizard) to handle complex multi-path, multi-steps nested forms

# Get started 🚀

## Install it 
```
npm i use-formidable
```

## Call it
```
const useForm = require('use-formidable');

or

import {useForm} from "use-formidable";

```

## Initialize your form data

Declaring an initialForm is not mandatory, you can pass an empty object, it will be updated on the go.

```
const initialForm = {
    identity: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        description: "",
    },
    contact: {
        email: "",
        phone: "",
        location: {
            country: "",
        },
    },
    subscribedToMailingList: false,
    numberOfAnything: 0,
};
```

## Declare useForm like you would declare any other hook
```
const [form, updateForm, formidable] = useForm(initialForm);
```

You get 3 objects:
* **form** holds the values of your form
* **updateForm** is used to update the form's data (check bellow)
* **formidable** holds specific methods (check bellow)

## And finally just declare your managed components

Call updateForm() to update the form. You can pass an object to enable live modifiers (check doc bellow).

```
<!-- Text inputs -->
<input type={"text"} name={"identity.firstName"} onChange={updateForm()} value={form.identity.firstName} />

<!-- Number inputs -->
<input type={"number"} name={"numberOfAnything"} onChange={updateForm()} value={form.numberOfAnything} />

<!-- Date inputs -->
<input type={"date"} name={"identity.dateOfBirth"} onChange={updateForm()} value={form.identity.dateOfBirth} />

<!-- A textarea -->
<textarea name={"identity.description"} onChange={updateForm()} value={form.identity.description}>
</textarea>

<!-- A select -->
<select name={"contact.location.country"} onChange={updateForm()} value={form.contact.location.country}>
    <option value={""} disabled={true}>-- Choose one --</option>
    <option value={"France"}>France</option>
    <option value={"Finland"}>Finland</option>
</select>

<!-- Checkboxes (the beloved) -->
<input type={"checkbox"} name={"subscribedToMailingList"} onChange={updateForm()} value={form.subscribedToMailingList} />

<!-- Radios -->
<!-- Email -->
<!-- Password -->
Examples are comming, but principle is exactly the same as aboove
```

You can also call updateForm yourself in a function like this:
```
updateForm()({target: {type: "custom", name: "name", value: "value"}});
```

Check further rules in the doc

# Doc 🔖

* **Live modifiers**: live modifiers change the input before updating form data. To use them, set them to **true** in the brackets when calling updateForm({}).
    * ***toLowerCase: true*** will apply toLowerCase()
    * ***toUpperCase: true*** will apply toUpperCase()
    * ***toCapitalized: true*** will capitalize the string
    * ***toNumber: true*** will extract numbers and '.' from a string to turn it into a number
    * ***toKeepNumbers: true*** will only keep numbers in a string
    * ***maximumLength: 130*** will prevent user from typing more than n characters
    * ***custom: (input: any) => any*** allows you to pass a custom modifier (must return the new  value)

* **Validators**: Validators help you to give a real-time feedback to your users on what's missing / wrong about their data. They are part of the formidable object.
    * ***isEmail(value)*** checks if a value is an email
    * ***isLengthAbove(value)*** checks if a value is above or equal to minimum length
    * ***isLengthUnder(value)*** checks if a value is under or equal to a maximum length 
    * ***isFileMime(file, ["jpeg", "gif"])*** checks if a file MIME TYPE is in the array (accepted values to check are: **"pdf" | "jpeg" | "png" | "gif" | "svg" | "doc" | "docx" | "odt" | "xls" | "xlsx" | "ods" | "csv"**)
    * ***isFileSmallerThan(file, size)*** checks file size in bytes
    * ***isCustomRegex(value, regex)*** checks if a value matches a custom regex (your function must have two parameters: the value to check and the regex)
    * ***isCustomValidator(value, (value) => boolean)*** checks if a value matches a custom function (your function must have the "value" parameter and return a boolean)
    
* **Displayers**: Displayers are specific modifiers. They help you to modify a value when it is displayed.
    * ***displayerSpacesToThousands(value)*** adds spaces in a number (or a string), all 3 numbers (1234 will become 1 234). It returns a string.   
   
* **Other methods**: They are part of formHandler object.
    * ***getInitialForm*** returns the initial state
    * ***reset*** resets all values
    * ***cancel*** cancel the last input that was modified <-- not available yet

* Which inputs are handled ?
    * checkbox  
    * color
    * date
    * datetime-local
    * email
    * file
    * hidden 
    * month
    * number 
    * password 
    * radio 
    * range 
    * text
    * textarea
    * search
    * select-one
    * tel
    * time 
    * url
    * week
    * To use a custom input, just call 
    ```
        // Be carefull, there are () twice
        updateForm()({target: {type: "custom", name: "name", value: "value"}});
    ```

* What you should be carefully about regarding components
    * Your input must always have a name
    * If the data you want to update is nested, declare the name as the path separated by '.' like in the examples above
    
# Go further

* Use it with [use-wizard](https://github.com/use-wizard/use-wizard) to build multi-paths, multi-steps wizards  

# Great alternatives

You have more robust battle-tested solutions out there
* **Formik** helps you to declare form components, this is a great solution, but I like keeping control over my components
* **react-hook-form** is a React hook, which makes it closer to this one
