const jsonServer = require("json-server");

const server = jsonServer.create();

const db = require("./database/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4001;

// middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/api/user', (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    // console.log(db)
    if (!from || !to){
        res.status(401).json({message: "payload missing"})
    } else {
        // console.log(db.users);
        
        const user = db.users.find(user=>{
            const fromDate = new Date(user.from);
            const toDate = new Date(user.to);
            console.log('from', user.from, from)
            console.log('to', user.to, to)
            console.log(fromDate >= new Date(from));
            return fromDate >= new Date(from) && toDate <= new Date(to)
        });

        res.json(user);
    }
   
});

server.post('/api/master', (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const noOfUser = req.body.noOfUser;
    // console.log(db)
    if (!from || !to || !noOfUser){
        res.status(401).json({message: "payload missing"})
    } else {
        const user = db.users.filter(user=>{
            const fromDate = new Date(user.from);
            const toDate = new Date(user.to);
            // console.log('from', user.from, from)
            // console.log('to', user.to, to)
            // console.log(fromDate >= new Date(from));
            return fromDate >= new Date(from) && toDate <= new Date(to)
        }).splice(0, noOfUser);
        res.json(user);
    }
   
});

server.get("/api/user/list", (req, res) => {
    const userCount = db.users.length;
      res.json({count:userCount});
});

// server.use(router);
server.listen(port);
