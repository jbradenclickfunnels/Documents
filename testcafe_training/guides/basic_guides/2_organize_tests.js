// Source: https://testcafe.io/documentation/402831/guides/basic-guides/test-structure
/* 
NOTES: 

1. I am most familiar with the Python coding language, so some of my syntax might mix. 
For example, in Javascript, semi-colons (;) are optional and in Python, they don't exist, 
so I choose to not use semi-colons for this training. 

I will also be using snake_case instead of camelCase for titles and variable names.

2. Backticks are used for fixtures and urls and are usually found above the Tab key, with the tilde. They are NOT single quotes.

Correct: `
Incorrect: '
*/

/*
For a test to be recognized by TestCafe, it needs at least a fixture and a test inside.

1. Fixture - A group of tests with the same starting URL. All tests belong to the fixture they are under.
*/

// How to define a fixture:

fixture `fixture_name`

// After defining the fixture, we'll need to set a starting URL for the browser to navigate to before the tests execute:

.page(`https://www.google.com`)

// While this syntax works, let's put it together for us to see how it'll look in a real test file:

// NOTE: API calls (.page) can either be inline or on the next line, indented to show hierarchy. 

// Psycho formatting
fixture `Fixture Name`.page(`https://www.google.com`)

// Non-psycho formatting
fixture `Fixture Name`
    .page(`https://www.google.com`)

// 2. Test - A script that performs actions. Typically has 1 or more assertions to generate a pass or fail status.

// How to defind a test:

test('test_name', async t => {

})

/*
Let's break this down:

1. The keyword 'test' lets TestCafe know this is script to run when the project is executed.
2. The title is a reference to know what test is running.
3. async t => lets TestCafe know the test is an asynchronous function that receives the test controller as an argument. It allows access to TestCafe's test API.
    3a. async: I don't want to get into the weeds on ins and outs of javascript, but rather want to focus on the TestCafe aspects of this training. If you want to learn more about async, you can visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function to learn more.

    TODO: Update the path once the file has been created.
    3b. t: The test controller will be discussed in the ./reference/test_controller.js file.

    3c. => : is a way to compact the traditional function syntax. More information can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

// After the curly braces, any valid javascript code can go inside and TestCafe will run successfully. I'll show a simple example that navigates to another url from the starting url in the fixture. 

test('navigating_to_another_url', async => {
    await t
        .navigateTo(`https://www.youtube.com`)
})

/* 
With this test, the fixture will first open the browser session to google.com and then when the test is kicked off, the browser will navigate to youtube.com.

The 'await' keyword is what allows TestCafe to run each step in order. Each action must be under an await statement so that it can finish before the next step begins.

TODO: Once the file for imports is made, update the path to find it here.
NOTE: This test file will not run successfully as we have not talked about imports yet. That will be discussed later on in the training.
*/

// A more advanced way to write the test above would be:

test
    .page(`https://www.youtube.com`)
    ('navigating_to_another_url', async t => {

})

/* 
This format would remove the .navigateTo action from the test, but should only be used if the URL needs to be different at the start of the test. Otherwise, if we need to navigate to a different url in the middle of the test, then await t.navigateTo(`<url>`) is the best way to write it.
*/