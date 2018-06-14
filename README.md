# the first part : info

## Node JS is
a Java script run time build on chrome's V8 Java script engine .
node js uses  an event-driven , non-blocking model that  makes it lightweight and efficient .
node.js package ecosystem , npm is the ecosystem of open source libraries in the world
## node js actually is
- a platform  which allows us to run javascript on a computer/ server
- read , delete and update files
- Easily communicate with a database
## why is node js so popular
- it uses Java script
- very fast (runs on the v8 engine & non-blocking code)
- Huge ecosystem of open source package (npm)
- Great for real-time services (like chats)
## what we'll learn
- the inner workings  of node.js
  1. V8 engine
  2. Modules
  3. Event emitter
  4. the file system
- Creating a web server
  1. Routing
  2. Express
  3. Templating
- make a node js application  (to do application)

---

# the second part :
 run file js `node file`

---

# the part third : the V8 engine
- computer do not understand Java script
- a Java script engine takes Java script , and convert  it into something it does understand -machine code
## path to machine code from js:
  Java script  --> C++ --> Assembly language -->Machine code
**building Java script is been Google**
### note :
  1. node js is written in c++ , so node js application by c++
  2. at the heart of node js is the V8 engine
  3. the V8 engine converts our js into machine code

# the part fourth  : the global object
  the object is properties or function
## example global function  :
  - **setTimeout** is two parameters , that function and time out by millisecond  for when this time call the function
  - **setInterval** is two parameters , that function and time out by millisecond for when after each of all time the function
  - **clearInterval** delete date that Interval
## example global variable  :
  - **__dirname** is directorate name that you are here
  - **__filename** is directorate name that you are here with file name it's running

---

# the fifth part : function expressions :
the ways for create function
  - normal
  - as var
  - that ()=>{}

---

# the sixth part : Modula and Require :
- **require** :To include a module.
- **exports**.*name Module* :create your own modules, to easily include them in your applications.

---

# the seven part : Module patterns
- what is the module ?
  module is as library or class that include variable and function , if you will use that in the future .
 the way for many object when export uses properties
 ```java
 module.exports.name-prop=var;
 ```
 ```java
 module.exports.name-prop=code;
 ```
 ```java
 module.exports={JSON that all object for export};
 ```
 - when you need use the prop write :
 ```java
 var name-require =require ()`
 ```
 **or**
 ```java
 name-require.name-prop
 ```

##### the template string is a new addition to es6 , it's easy way for write sentences  that include "string"+var+"string" , the way use \` \` back ticks and include var in `${var}`

---

# the part eight  : the node event emitter
in the node js here core modules, it's already functionalities of node.js
### core modules :
1. **event module** ,it's similar in JQuery use event by : `element.on('click' ,function(){});` , so mean event module for create custom event use *EventEmitter* and then used on and emit function .
2. **util** , it's works ,one of them inherits

---

# the night part: reading & writing files (FS)
**FS** is core modules for differentw thing but now for read and write
#### the functions of FS :
  - **readFileSync** for read file as synchronous and get two parameters are path file and type read as utf8.
  - **writeFileSync** for write file and give to parameters , they are name file and data.
  - **readFile** same readFileSync but it's asynchronous so run code below then it , and give two parameters , they are err and data.
  - **writeFile** same writeFileSync but it's asynchronous.

---

# the ten part : creating and removing Directories
####  **more functions of FS :**
1. **the file** :
    - *unlink*  , it's function for delete file and you have to parameter , it's function
2. **the folder** :
    - *mkdirSync*, it's function for create folder
    - *rmdirSync* , it's function for remove folder
    - *mkdir(1,2)* ,it's function for create folder by use asynchronous give function
    - *rmdir*,it's function for remove folder

# the eleven part : Cline and Server side
#### Request:
 sent massage from **Cline** to **Server** ,and sent the data by head and body
- this data include:
    - url
#### Response:
 sent massage from **Server** to **Cline** ,and sent the data by *head* and *body*
 - **Header** :
    - Content-Type
    - Status

- for write Header by
```java
writeHead(s,{'Content-Type': 'text/plain || html or application/json ........'});
```

- for write Body by
```java
end(data);
```
# the twelve part :creating a Server
#### class or modules  :
1. **http** : the class include functions for create server and ........
    - **createServer(** *function(req,res){}* **)** : you pass in the function a function take two parameters:*request* and *response* .
      - *this Server include the functions {for var server}* :
          - **listen(** *port , ip* **)** : the function for give the Server *Port* and *IP* .
---
# the thirteen part : Buffer and Stream
- **Buffer**: A buffer is a temporary storage location for data while the data is being transferred.*if you show code from* [Muhammed Essa](https://www.youtube.com/watch?v=bINMY_MMU3Q&index=16&list=PLMYF6NkLrdN8zyk4SNJboLa94GqWv4cFU)
buffer help data base to transfer by the better way with I/O process
- **streams** : can create streams in node.js  to transfer data .
##### when you use buffer and streams in your application when slower device for *increase performance*
---
# the fourteenth part : Readable Streams in (**fs**)
the way same the old way but the way use buffer and stream for small used memory in this time ,so the way quickly.
- **createReadStream(** *path , type coding* **)**: the inherits of EventEmitter so use
```java
NameStream.on("data",function(chunk){
  //coding
  })
  ```
# the fifteenth part : Writable Stream in (**fs**)
the way same the old way but the way use buffer and stream for small used memory in this time , so the way quickly.
- **createWriteStream(** *path* **)**
  - *NameWriteStream*.**write(** *data* **)**
---
# the sixteenth part : PIPEs
the method is called on a readable stream, adding this writable to its set of destinations , for easily and quickly.
```java
Name_ReadStream.pipe(Name_Write_Stream or any place  ); //as response from server to the cline
```
---

# the seventeenth part : Serving HTML pages
[here](https://www.youtube.com/watch?v=BBOUfdUZIVo&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=17)
---
# the eighteenth part : serving JSON
for convert json data into json string for show in browser
```java
JSON.stringifty(json_data);
```
---
# the nineteenth part : Basic Routing
for different between urls and  sent data use `if statement on req.rul `

---
# the twenty-th part :the node packages manager (npm)
search packages from npm's page
install :
`npm install name-package`
uninstall :
`npm uninstall name-package`

module
Features
express  : this helps us with routing and templating

Robust routing
Focus on high performance
Super-high test coverage
HTTP helpers (redirection, caching, etc)
View system supporting 14+ template engines
Content negotiation
Executable for generating applications quickly

---
# the twenty first part : the package.json file
package.json is file include about info your application
for create package .json
`npm init`
when install any package register in package.json in dependencies by :
`npm install name-package -save`
**note** you can install many packages by *package.json* in dependencies
---
# the twenty second part : installing nodemon
nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application. and so on
[here](https://www.youtube.com/watch?v=4N0d8HhU5DE&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=22)
`npm install -g nodemon ` //-g means globally
run your application:
`nodemon main-file.js`
for restart `rs`

# the twenty third part : introduction to Express
[here](https://www.youtube.com/watch?v=9TSBKO59u0Y&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=23)
- easy and flexible routing system
- integrates with many templating engines
- contains a middleware framework
function replace `rep.writeHead() and rep.end()` by `rep.send()`
# the twenty fourth part : express routing parameters
[here](https://www.youtube.com/watch?v=MuMs1pLuT7I&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=24)
and different between get and post methods [here](https://www.youtube.com/watch?v=UObINRj2EGY)
for send data in get by :`:name-data`
and show data `req.params.naem-data`
# the twenty fifth part : Template express
`rep.sendFile(__dirname +"/name file ");`
## Effective JavaScript templating.(ejs)
"E" is for "effective." EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.
**Features:**
    - Fast compilation and rendering
    - Simple template tags: <% %>
    - Custom delimiters (e.g., use <? ?> instead of <% %>)
    - Includes
    - Both server JS and browser support
    - Static caching of intermediate JavaScript
    - Static caching of templates
    - Complies with the Express view system
tell express about view engine is ejs by
`app-express .set("view engine", "ejs") //default view folder `
and end file `.ejs`
and method for read the file is `res.render("file.ejs")`
and sent data to the page by json as second parameter in `res.render("file.ejs",{name-data:req.params.name-data})`
`<% = %>//output data`
# the twenty sixth part :Template Engines ( part 2 )
you can use js in html in `<% %>`
# the twenty seventh part :  partial templates
`<% include folder/file %>`
# the twenty eighth part : middleware & static files
function for use call static files in views
```java
  app.use(1,2)//1 is parameter when call from view ,2 is function for work when use 1
  app.use ("assets",express.static(folder that include static_file));
```

# the twenty ninth part : query string
query string after that :`https:......?*****`
if you want know query string form request use this:
`req.query`
[here](https://www.youtube.com/watch?v=QTAYRmMsVCI&index=29&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)
# the thirty-th part: handing post requests
if you want use post  should use encoding data so use `body-parser` read about that
[body-parser](https://www.npmjs.com/package/body-parser)
if you want know data body string form request use this:
`req.body`
[here](https://www.youtube.com/watch?v=rin7gb9kdpk&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=30&t=38s)

# the thirty fifth part :
[about](https://www.youtube.com/watch?v=L4OP8JGKbQU&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=35)
[server for mongodb is mlab](https://mlab.com/)

# the thirty sixth part :
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.[here](https://www.npmjs.com/package/mongoose)
you should use :
- Schema
- model
  - save()
  - find({}, function (err, docs) {
  // docs.forEach
}
  - remove(function(err,data)) : it should find date for remove 
# Note :
## algorithm oauth by passport  
1. create app in google developer 
2. coding auth with passport with strateg google and pass info for them
3. create router for auth and context auth-google etc .....
4. create session and cookie for users	
5. final logout process
