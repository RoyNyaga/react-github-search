# Search Github Users

<img src="https://res.cloudinary.com/it-s-tech/image/upload/v1599488132/Screen_Shot_2020-09-07_at_3.13.58_PM_sdrlpy.png">

### About
Simple application that utilizes the github API to provide github users searched in the search input field. It also displays the characteristics of the repositories of a github user through charts. Athentication is required to access the apps dashboard.

### Live Demo. 
click [here](https://confident-hermann-9c1ff6.netlify.app) to see the live version.

### Main Teachnologies

#### Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

#### React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from 'react-icons/fi';
<FiUsers className='nameOfTheClass'> </FiUsers>;
```

#### React Router Dom

version used - "react-router-dom": "^5.2.0",

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

#### Gihthub API

- [Root Endpoint](https://api.github.com)
- [Get User](https://api.github.com/users/wesbos)
- [Repos](https://api.github.com/users/john-smilga/repos?per_page=100)
- [Followers](https://api.github.com/users/john-smilga/followers)
- [Rate Limit](https://api.github.com/rate_limit)

  For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

#### Fusion Charts

- [Fusion Charts - Main Docs](https://www.fusioncharts.com/)
- [First React Chart](https://www.fusioncharts.com/dev/getting-started/react/your-first-chart-using-react)
- [List Of Charts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts)
- [Themes](https://www.fusioncharts.com/dev/themes/introduction-to-themes)

#### Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections
  email,social

- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)

#### Deployment

[Netlify](https://www.netlify.com/)

#### Additional Info

#### Redirects with react-router-dom

In order for routing to work on netlify, redirects was added to the public folder

- \_redirects file in public

```

/*    /index.html   200

```

[Redirects Blog Post](https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc)

#### Warnings and create-react-app

package.json

```js
"build": "CI= react-scripts build",
```

[create-react-app Warning Fix Blog Post](https://community.netlify.com/t/how-to-fix-build-failures-with-create-react-app-in-production/17752)

<!-- deb http://security.ubuntu.com/ubuntu disco-security main restricted -->
<!-- # deb-src http://security.ubuntu.com/ubuntu disco-security main restricted
deb http://security.ubuntu.com/ubuntu disco-security universe
# deb-src http://security.ubuntu.com/ubuntu disco-security universe
deb http://security.ubuntu.com/ubuntu disco-security multiverse
# deb-src http://security.ubuntu.com/ubuntu disco-security multiverse
 -->
 
 ### Author

:bust_in_silhouette: [Nyaga Andre Roy](https://github.com/RoyNyaga)
* Gihub: [RoyNyaga](https://github.com/RoyNyaga)
* Email: [nyagaandreroy@gmail.com](mailto:nyagaandreroy@gmail.com)
* Linkedin: [Roy Nyaga](https://www.linkedin.com/in/roy-nyaga-andre/)
