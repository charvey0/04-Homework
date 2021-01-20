
// This is an array of questions to be asked:
// item at index 0 is the question
// item at index 1 is the correct answer
// items at indices 2,3,4 are distractors
const questions = [
    ["Inside which HTML element do we put the JavaScript?",
        "\<script\>",
        "\<javascript\>",
        "\<js\>",
        "\<scripting\>"
    ],    
    ['What is the correct JavaScript syntax to write "Hello World"?',
        'document.write("Hello World")',
        'response.write("Hello World")',
        '"Hello World"',
        '("Hello World")'
    ],
    ['Where is the correct place to insert a JavaScript?',
        'Both <head> and <body> sections',
        'Neither <head> nor <body> sections',
        'The <body> section',
        'The <head> section'
    ],
    [`What is the correct syntax for referring to an external script called \"xxx.js\"?`,
        `<script src="xxx.js">`,
        `<script name="xxx.js">`,
        `<script href="xxx.js">`,
        `<script value="xxx.js">`
    ],
    [`An external JavaScript must contain the \<script\> tag`,
        `Not necessarily`,
        `Always`,
        `Sometimes`,
        `Never`
    ],
    ['How do you write "Hello World" in an alert box?',
        'alert("Hello World")',
        'msgBox("Hello World")',
        'alertBox="Hello World"',
        'alertBox("Hello World")'
    ],
    ['How do you create a function?',
        'function myFunction()',
        'function:myFunction()',
        'function=myFunction()',
        'myFunction():function'
    ],
    ['How do you call a function named "myFunction"?',
        'myFunction()',
        'call myFunction()',
        'call function myFunction',
        'Call.myFunction()'
    ],
    ['How do you write a conditional statement for executing some statements only if "i" is equal to 5?',
        'if (i==5)',
        'if i==5 then',
        'if i=5 then',
        'if i=5'
    ],
    ['How do you write a conditional statement for executing some statements only if "i" is NOT equal to 5?',
        'if (i != 5)',
        'if =! 5 then',
        'if (i <> 5)',
        'if <>5'
    ],
    ['How many looping statements are there in JavaScript?',
        '3. The "for" loop, the "while" loop, and the "do...while" loop',
        '2. The "for" loop, and the "while" loop',
        '4. The "for" loop, the "while" loop, the "do...while" loop, and the "loop...until" loop',
        '1. The "for" loop'
    ],
    ['How does a "for" loop start?',
        'for (i = 0; i <= 5; i++)',
        'for (i = 0; i <= 5)',
        'for i = 1 to 5',
        'for (i <= 5; i++)'
    ],
    ['How can you add a comment in a JavaScript?',
        '//This is a comment',
        '\'This is a comment',
        '<!--This is a comment-->',
        '#This is a comment'
    ],
    ['What is the correct JavaScript syntax to insert a comment that has more than one line?',
    `/*This comment has

    more than one line*/`,
    `<!--This comment has
    
    more than one line-->`,
    `//This comment has
    
    more than one line//`,
    `##This comment has
    
    ##more than one line`
    ],
    ['What is the correct way to write a JavaScript array?',
        'var txt = new Array("tim","kim","jim")',
        'var txt = new Array:1=("tim")2=("kim")3=("jim")',
        'var txt = new Array="tim","kim","jim"',
        'var txt = new Array(1:"tim",2:"kim",3:"jim")'
    ],
    ['How do you round the number 7.25, to the nearest',
        'Math.round(7.25)',
        'rnd(7.25)',
        'round(7.25)',
        'Math.rnd(7.25)'
    ],
    ['How do you find the largest number of 2 and 4?',
        'Math.max(2,4)',
        'Math.ceil(2,4)',
        'ceil(2,4)',
        'top(2,4)'
    ],
    ['What is the correct JavaScript syntax for opening a new window called "window2" ?',
        `window.open("http://www.w3schools.com","window2")`,
        `new("http://www.w3schools.com","window2")`,
        `new.window("http://www.w3schools.com","window2")`,
        `open.new("http://www.w3schools.com","window2")`
    ],
    ['How do you put a message in the browser\'s status bar?',
        'window.status = "put your message here"',
        'statusbar = "put your message here"',
        'window.status("put your message here")',
        'status("put your message here")'
    ],
    ['How do you find the client\'s browser name?',
        'navigator.appName',
        'client.navName',
        'browser.name',
        'Browser.value'
    ],
    ['What are the basic ways that people can become aware of your Web site?',
        'All of listed methods.',
        'The link is followed from another Web site.',
        'URL is told by somebody.',
        'Your site is listed in a search engine.'
    ],
    ['What are the basic ways to provide hints for search engines?',
        'All of listed methods.',
        'Put keywords in the <TITLE> tag of the Web page.',
        'Put keywords in the first few lines of the Web page.',
        'Put keywords as many times as possible in the Web page.'
    ],
    ['The Web security issues are involved in:',
        'All of listed issues.',
        'Server.',
        'CGI script.',
        'Client.'
    ],
    ['What should you keep in mind when you use links in a Web page?',
        'Never put two links immediately adjacent to one another and keep the link content as concise as possible.',
        'Never put two links immediately adjacent to one another,',
        'Keep the link content as concise as possible.',
        'Need not worry too much about links in general.'
    ],
    ['What should you keep in mind when you use images in a Web page',
        'Keep the image simple and isolate large graphics.',
        'Keep the image simple.',
        'Isolate large graphics.',
        'Need not worry about putting in images in general.'
    ],
    ['In an HTML form, if you require users to input a number that has a maximum of ten digits, like a telephone number, you can use the _____ property/attribute to make sure that no more than ten digits are accepted in the field.',
        'Maxlength',
        'Length',
        'Value',
        'None of these.'
    ],
    ['n HTML, use the _____ property/attribute to set a default value that displays in an input box when the form is initially displayed.',
        'Value',
        'Default',
        'Form',
        'None of these.'
    ],
    ['In HTML, the _____ property/attribute identifies the CGI script that will process a form.',
        'Action',
        'Value',
        'Enctype',
        'hidden'
    ],
    [`In JavaScript, the following loop will execute ________ times. 
    
    for (x=1; x<11; x++)`,
        '10',
        '11',
        '9',
        'cannot tell from this portion of the script'
    ],
    ['The majority of a typical Web document will be found in:',
        'the body tag.',
        'the head tag.',
        'the title tag.',
        'a comment tag.'
    ],
    ['In JavaScript, the symbols + - * and / are:',
        'operators.',
        'expressions.',
        'comparison operators.',
        'none of these options.'
    ],
    [`In JavaScript, the expression:

    x!=y 

returns false if:`,
        'the variables are equal.',
        'x is less than y.',
        'the variables are not equal.',
        'none of these options.'
    ],
    ['In JavaScript, which of the following is a logical operator?',
        '&&',
        '|',
        '&',
        '/'
    ],
    ['When you want to use JavaScript to manipulate the browser window, the browser window\'s JavaScript object name is:',
        'Window',
        'Frame',
        'Document',
        'browser_window'
    ],
    ['Alert(message), close() and reset() are JavaScript:',
        'Methods',
        'Objects',
        'Properties',
        'commands'
    ],
    ['When you want to use JavaScript to manipulate the currently displayed Web page, the Web page\'s JavaScript object name is:',
        'Document',
        'browser_window',
        'Window',
        'Frame'
    ],
    ['In JavaScript, which of the following is NOT an assignment operator?',
        '||',
        '*=',
        '=',
        '+='
    ],
    ['In JavaScript, what would be the proper form of address in the object hierarchy for the second element in a form called "info"?',
        'document.info.elements[1]',
        'document.info.elements[2]',
        'document.forms.info.elements[2]',
        'info.elements[2]'
    ],
    ['A named element in a JavaScript program that is used to store and retrieve data is a _____.',
        'Variable',
        'string',
        'assignment operator',
        'Method'
    ],
    ['Which of the following is not true?',
        'CSS is tightly integrated with the HTML structure.',
        'CSS is part of dynamic HTML.',
        'CSS stand for cascading style sheet.',
        'CSS is for design control of the Web page appearance.'
    ],
    ['To define a style sheet, you need to:',
        'specify each property and its corresponding value and associate property-value pairs to dedicated HTML tag(s).',
        'specify each property and its corresponding value.',
        'associate property-value pairs to dedicated HTML tag(s).',
        'none of these options'
    ],
    ['Which of the following is a valid style definition format?',
        '<SPAN STYLE="property-value pair(s)">... </SPAN> and <STYLE>... </STYLE>',
        '<SPAN STYLE="property-value pair(s)">... </SPAN>',
        '<STYLE>... </STYLE>',
        'none of these.'
    ],
    ['For defining a spacing property in a style sheet, which of the following is not true?',
        'position white-space: normal',
        'text-indent: 10px',
        'padding-right: 100px',
        'margin-top: 50px'
    ],
    ['Which HTML tag is used to define an embedded style sheet?',
        '<style>',
        '<script>',
        '<css>',
        '<stylesheet>'
    ],
    ['The introduction of CGI scripts changed the way that the Web was used because: ',
        'all of these',
        'of the ability to maintain customer databases.',
        'customers acquired the ability to locate and purchase merchandise online.',
        'it allows computer users to access a company\'s customer support database.'
    ],
    ['In an HTML form, the correct syntax for creating an input box named "Phone" that is 15 characters in length is:',
        '<input type="text" name= "phone" size= "15"></input>',
        '<input type="text" size= "15"></input>',
        '<input type="text" name= "Phone 15">',
        'none of these.'
    ],
    ['In a form, if you want users to select only one option out of many, use:',
        'radio buttons.',
        'check boxes or radio buttons. ',
        'check boxes.',
        'text boxes.'
    ],
    ['In HTML, you use a button on a form to:',
        'all of these',
        'run a program.',
        'submit a form to a server.',
        'reset a form to its original state.'
    ],
    ['Which is the correct CSS syntax?',
        'body {color: black}',
        '{body;color:black}',
        'body:color=black',
        '{body:color=black(body}'
    ],
    ['Which HTML attribute is used to define inline styles?',
        'style',
        'font',
        'class',
        'styles'
    ]
];
