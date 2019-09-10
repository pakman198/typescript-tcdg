## Node-Express Login

In this project I built a very simple/hardcoded login using node and express.
Since there's not a lot of support for typescript on node and express I ended up using decorators.
To be able to share data among the application I had to use metadata ([reflect-metadata](https://www.npmjs.com/package/reflect-metadata)).
Finally on the `tsconfig.json` file I enabled support for decorators and metadata.

At the end I created 3 different decorators:
- `routes` which are dynamically generated (get, post, etc) and used for methods inside the classes
- `controller` which is used for the classes
- `use` for implementing middlewares
- `bodyValidator` for validating the body of the post request (in this case we just validate that the request has an email and password properties) 

###### Section 14: Express + Typescript