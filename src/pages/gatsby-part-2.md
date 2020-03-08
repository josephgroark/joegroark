---
title: "Gatsby part 2"
date: "2020-03-08"
---

#Making your site

The first thing to see with Gatsby is the changes made in code are reflected almost instantly into the browser on saving.
This is known as hot reloading and can really help speed up development. 

Try it yourself open up a code editor and the project you downloaded and explore src/pages/index.js
make a adjustment the file to change the inner text of the div

```
import React from "react"
export default () => (
  <div}>Hello Gatsby!</div>
)
```

to this 

```
import React from "react"
export default () => (
  <div}>Hello YOURNAME!</div>
)
```
now try added a paragraph and a img below the heading

```
import React from "react"
export default () => (
  <div>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
```
Here we can see React in action, it's one of the building blocks of Gatsby. React is simply a code library (built with JavaScript) for building user interfaces. It’s the framework that Gatsby uses to build pages and structure content. Let's see just how easily React components can be leveraged to create another page.

In the src folder you'll see the standard structure for keeping  components organized and together, in that folder create a new file and call it about.js.

copy the following code 

```
import React from "react"
export default () => (
  <div style={{ color: `teal` }}>
    <h1>About Gatsby</h1>
    <p>Such wow. Very React.</p>
  </div>
)
```

now you'll see an about page at http://localhost:8000/about/.

So far Gatsby is a simple easy to follow framework, next i'll try to explain Reacts Components and there usage a bit better. It's something I find is a little more abstract and might take time to wrap your head around but when do, it'll open up a great make to start mass producing components and help scale up your site as articles can be churned out without causing excess complexity.