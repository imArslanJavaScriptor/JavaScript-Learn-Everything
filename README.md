# JavaScript Mastery Notes

Netscape Navigator, a popular browser at that time, wanted a simple programming language to add interactivity to web pages. Created by Brendan Eich in 1995 in only 10 days, its first name was Mocha, then LiveScript, and then JavaScript because Java was very popular at that time. But remember, Java and JavaScript are completely different programming languages.

Later, until 1996, Internet Explorer, another popular browser, introduced JScript by modifying some features of JavaScript.

So at that time, developers specifically mentioned "This site best viewed with Netscape Navigator" or "This site best viewed with Internet Explorer."

Because of two different programming languages that work the same but for different browsers, it was a very problematic situation for both developers and clients who needed websites. Because there were possibilities that if I need a website, I don't have the budget to create separate websites for different browsers. In this situation, we went to the ECMA Script Organization (ECMA is an organization that works for the standardization of technologies).

So now ECMA decides how a scripting language works in browsers, and everybody follows what they decide.

Okay, now ECMA has the document called ECMA-262, and they use the term ECMAScript because JavaScript's trademark is with Oracle, but things are the same when we talk about ECMAScript, so it means we talk about JavaScript. The community that made this is called TC39 = Technical Committee 39.

TC39 is the community that decides what to add or not in JavaScript. They gather for a meeting every 2 months, meaning 6 meetings in a year.

After that, ECMAScript introduced their first standard specifications in 1997 called ES1. After that, it continued to deliver new standards in the same way, and we got ES5 in 2009 (it came with a lot of new features). From here, JavaScript started being used a lot more. Then after that, a new version was released in 2015, which was a groundbreaking update, popular with the name ES6, which changed JavaScript completely, and the biggest update came, and after that, JavaScript became popular as a modern programming language. It comes with the biggest update in history.

And 2015 ma jb ES6 introduce kya to uske bad se isko log ES6 ki bajaye
ES6: ES2015,
ES7: ES2016,
ES8: ES2017,
jaise name se pukarte ha becuae of it annual releases. 

There are 4 stages through which any feature is added to JavaScript.
Where they make sure ke ye new future kuch problems create na kre etc

### Importent: JavaScript is Backward Compatible
Which means jo feature JavaScript ma aj se 20 saal pehle aya tha wo feature aj bhi javascript ma kam krega.

### Importent: But JavaScript is not Forward Compatible
Which means agr aj koi new feature intriduce hus Javascript ke andr or koi person use kr rha ha let say 15 saal purana browser means usne apna browser update nhi kia to wo newly introduced feature uske pas kam nhi krege. (and yes there are peoples who don't update there browsers for long)

So for this problem we have modern tools like babel so waht they can do it they transpile our newly written modern JavaScript code into  prev versions like ES5 so that the old browsers can also support it.
