---
title: "Gatsby part 4"
date: "2020-03-11"
---

Here we are going to learn about layouts, this core concept covers how you can share components across multiple pages.
Since we are creating a blog we'll want a nice global base styles for the site’s typography. We're going to use a plugin(javascript written by a contributor to tackle specifics)

first in a terminal 

```
npm install --save gatsby-plugin-typography react-typography typography typography-theme-fairy-gates

```
in the root of the project we need to edit the gatsby-config.js to complete the plugin. copy the following code and paste it into this blank file

```
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
```

with our newly minted plugin lets pick our styles and themes, in the src/utils/typography.js file paste in the following.

```
import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
```

Okay now we have some pretty good basics let's step on the gas and get a three page site with the typical home, about, and contacts. copy the following code in the corresponding files.

src/pages/index.js

```
import React from "react"

export default () => (
  <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
)
```

src/pages/about.js

```
import React from "react"

export default () => (
  <div>
    <h1>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
  </div>
)
```

src/pages/contact.js

```
import React from "react"

export default () => (
  <div>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </div>
)
```

take a moment to launch the server (gatsby develop) and admire your work.

Now a quick layout component can be banged in to make everything look a bit more uniform.

in a file called src/components/layout.js paste

```
import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MySweetSite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
```

Then import the component into the src/pages/index.js

```
import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </Layout>
)
```

And there you have it! A three page site with basic global navigation. Good work and comment at me with your thoughts and suggestions!
