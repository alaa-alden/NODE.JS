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
 1. `module.exports.name-prop=var`
 2. `module.exports.name-prop=code`
 3. `module.exports={JSON that all object for export}`
 - when you need use the prop write `var name-require =require ()` and `name-require.name-prop`

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

- for write Header by `writeHead(s,{'Content-Type': 'html or text or json ........'})`

- for write Body by `end(data)`
# the twelve part :creating a Server
#### class or modules  :
1. **http** : the class include functions for create server and ........
    - **createServer(** *function(req,res){}* **)** : you pass in the function a function take two parameters:*request* and *response* .
      - *this Server include the functions {for var server}* :
          - **listen()** : the function for give the Server *Port* and *IP* .
