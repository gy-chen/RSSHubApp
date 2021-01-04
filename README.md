# RSSHubApp
Create new routes in RSSHub without changing RSSHub source code.

## Getting Started
Create project and install RSSHub
```sh
mkdir my-custom-rsshub
cd my-custom-rsshub
npm init
npm install rsshub
```

Code new route scripts. Create setting.json in the project root, then define route path and corresponding script in your setting.json.
```json
{
    "routes": {
        "/my-custom-route": "path/to/myCustomRoute.js",
        "/my-custom-route2": "path/to/anotherCustomRoute.js"
    }
}
```

Start RSSHub
```sh
npx rsshubapp
```

Explore the new routes
```
http://localhost:1200/my-custom-route
```
