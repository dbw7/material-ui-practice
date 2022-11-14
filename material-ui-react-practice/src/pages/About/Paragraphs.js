export const why = "I found that classes I really wanted to take were filling up before my registration time. I began checking in daily to see if a seat had opened up; however, being a programmer I decided I could automate this process for ease. This resulted in me creating a program for myself that checked if any seats opened up in classes I wanted and then automatically register me for them.";
export const why2 = "I then realized that if I was facing this issue then so were others, so I decided to make this available for all students. Although it won't automatically register students for their classes, it will at least notify them if a seat opens up and increase the likely hood of them snatching up a seat for the class they want.";

export const how = "To put it very simply, I keep track of which classes are currently requested by users to be monitored. I then check the college's database for their availability. If I see that the availability has gone from full to not full, I notify the relevant students through email (and maybe through text, not sure yet).";
export const how2 = "While this seems fairly trivial, especially when I first decided to make it, it grew pretty complex over time. I wanted to be efficient throughout each process so that I was not causing unhealthy traffic to the college's site. To do this, I spent many hours thinking through how the database should be set up and how each request should work.";
export const how3 = "Additionally, I put forth a great deal of effort to make this site as simple and intuitive as possible while also looking really good and functioning responsively."

export const what ="The front-end of this website (everything you can see) is built in React, a javascript framework that centers itself around the idea of re-usable components to make an SPA (single page application). A lot of the styling comes from Material UI, a react javascript package for good looking, customizable components (things like tables, buttons, etc). There is also a lot of plain CSS styling.";
export const what2 = "The back-end of this website (the things you can't see but dictate the logic of what is happening) is built with Node JS, another javascript framework. The API is a REST API built using Express. The database that stores the content is a Mongo DB database. For authentication, I'm using Google's API coupled with Passport.js, a javascript authentication framework. Through those, I'm using JWTs (JSON web tokens) to transfer authentication data back and forth.";