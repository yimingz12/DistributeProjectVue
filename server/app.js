const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const NodeCouchDb = require('node-couchdb');

const couch = new NodeCouchDb({
    host: '45.113.232.65',
    port: 5984,
    auth:{
        user:'user',
        password:'pass'
    }
});
const dbName = 'multiplayer_game';
const viewUrl = '_design/all_multigame/_view/all';
couch.listDatabases().then(function(dbs){
console.log(dbs);
});
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(req,res){
    couch.get(dbName,viewUrl).then(
        function(data,headers,status){
            //console.log(data.data.rows);
          res.render('index',{
              game:JSON.stringify(data)
          });
        },
        function(err){
            res.send(err);
        });
    
});
const dbName2 = 'game_detail';
const viewUrl2 = '_design/all_gameDetail/_view/all';

app.get('/gameDetail',function(req,res){
    couch.get(dbName2,viewUrl2).then(
        function(data,headers,status){
          //console.log(data.data.rows);
          var tempfile = data.data.rows
          var sorted = tempfile.sort(function(a, b) {
            var x = a.value.au_num; var y = b.value.au_num;
            if (x > y) {return -1;}
            if (x < y) {return 1;}
            return 0;
        });
          res.render('gameDetail',{
            
              gameDetail:JSON.stringify(sorted)
          });
        },
        function(err){
            res.send(err);
        });
    
});


const dbname3 = 'au_user';
const terms = ["game_num","recent_time","review_num","total_time","user_num"];
const terms1 = ["recent_time","total_time"];
const viewUrlA = "_design/au_user/_view/";
const viewUrlB = "?group_level=1";
const viewUrlC = "?group_level=2";

var dict = {};
dict["ACT"] = {};
dict["NSW"] = {};
dict["NT"] = {};
dict["QLD"] = {};
dict["SA"] = {};
dict["TAS"] = {};
dict["VIC"] = {};
dict["WA"] = {};

app.get('/gameDistribute',function(req,res){
    
    terms.forEach(function (name){
            var url = viewUrlA+name+viewUrlB;
            couch.get(dbname3,url).then(
                function(data,headers,status){
                    var data1 = data.data.rows;
                    for (var k in data1){
                        var tmp = data1[k];
                        dict[tmp["key"]][name] = tmp["value"];
                    };
                    if(Object.keys(dict["WA"]).length==5){
                        for (var key in dict) {
                            if(Object.keys(dict[key]).length==0){
                                delete dict[key];
                            };
                        };
                        
                    }
                },
                function(err){
                    res.send(err);
                }
                
            )
            
    })
    res.render('gameDistribute',{
                            
        gameDistribute:JSON.stringify(dict)
    });
});


var dict1 = {};
// dict1["4893"] = {};
// dict1["4898"] = {};
// dict1["4899"] = {};
// dict1["4902"] = {};
// dict1["4903"] = {};
// dict1["4925"] = {};
// dict1["4928"] = {};
// dict1["4930"] = {};
// dict1["4937"] = {};

// dict1["4938"] = {};
// dict1["4939"] = {};
// dict1["4951"] = {};
// dict1["4960"] = {};
// dict1["4961"] = {};
// dict1["4962"] = {};
// dict1["4964"] = {};
// dict1["4975"] = {};
// dict1["4976"] = {};

// dict1["4977"] = {};
// dict1["4980"] = {};
// dict1["4988"] = {};
// dict1["4990"] = {};
// dict1["4991"] = {};
// dict1["4992"] = {};
// dict1["4996"] = {};
// dict1["5015"] = {};
// dict1["5022"] = {};

// dict1["5031"] = {};
// dict1["5034"] = {};
// dict1["5035"] = {};
// dict1["5036"] = {};
// dict1["5037"] = {};
// dict1["5045"] = {};
// dict1["5052"] = {};
// dict1["5053"] = {};
// dict1["5054"] = {};

// dict1["5058"] = {};
// dict1["5060"] = {};

dict1["Ararat"] = {};
dict1["Barinsdale"] = {};
dict1["Ballarat"] = {};
dict1["Benalla"] = {};
dict1["Bendigo"] = {};
dict1["Castlemaine"] = {};
dict1["Clifton_Springs"] = {};
dict1["Colac"] = {};
dict1["Craigieburn"] = {};

dict1["Cranbourne"] = {};
dict1["Crib_Point"] = {};
dict1["Geelong"] = {};
dict1["Hamilton"] = {};
dict1["Hastings"] = {};
dict1["Healesville"] = {};
dict1["Horsham"] = {};
dict1["Kyabram"] = {};
dict1["Lakes_Entrance"] = {};

dict1["Lara"] = {};
dict1["Leopold"] = {};
dict1["Maryborough"] = {};
dict1["Melbourne"] = {};
dict1["Melton"] = {};
dict1["Mildura"] = {};
dict1["Morwell"] = {};
dict1["Pakenham"] = {};
dict1["Portland"] = {};

dict1["Sale"] = {};
dict1["Somerville"] = {};
dict1["Stawell"] = {};
dict1["Sunbury"] = {};
dict1["Swan_Hill"] = {};
dict1["Traralgon"] = {};
dict1["Wangaratta"] = {};
dict1["Warragul"] = {};
dict1["Warrnambool"] = {};

dict1["Wodonga"] = {};
dict1["Wonthaggi"] = {};
var vicMap = {
"4893":"Ararat",            "4898":"Barinsdale",        "4899":"Ballarat",
"4902":"Benalla",           "4903":"Bendigo",           "4925":"Castlemaine",
"4928":"Clifton_Springs",   "4930":"Colac",             "4937":"Craigieburn",  

"4938":"Cranbourne",        "4939":"Crib_Point",        "4951":"Geelong",   
"4960":"Hamilton",          "4961":"Hastings",          "4962":"Healesville",
"4964":"Horsham",           "4975":"Kyabram",           "4976":"Lakes_Entrance",

"4977":"Lara",              "4980":"Leopold",           "4988":"Maryborough",
"4990":"Melbourne",         "4991":"Melton",            "4992":"Mildura",   
"4996":"Morwell",           "5015":"Pakenham",          "5022":"Portland",

"5031":"Sale",              "5034":"Somerville",        "5035":"Stawell",
"5036":"Sunbury",           "5037":"Swan_Hill",         "5045":"Traralgon",
"5052":"Wangaratta",        "5053":"Warragul",          "5054":"Warrnambool",
"5058":"Wodonga",           "5060":"Wonthaggi"};

app.get('/vicDistribute',function(req,res){
    
    terms.forEach(function (name){
            var url = viewUrlA+name+viewUrlC;
            couch.get(dbname3,url).then(
                function(data,headers,status){
                    var data1 = data.data.rows;
                    for (var k in data1){
                        var tmp = data1[k];
                        
                        
                        if(tmp["key"][0]=="VIC"&&tmp["key"][1]!=null){
                            dict1[vicMap[tmp["key"][1]]][name] = tmp["value"];
                            

                        }
                    };

                    if(Object.keys(dict1["Melbourne"]).length==5){
                        for (var key in dict1) {
                            if(Object.keys(dict1[key]).length==0){
                                delete dict1[key];
                            };
                        };
                        
                    }
                },
                function(err){
                    //res.send(err);
                }
                
            )
            
    })
    res.render('vicDistribute',{
                            
        vicDistribute:JSON.stringify(dict1)
    });
});
dict2={};
dict2["Ararat"] = {};
dict2["Barinsdale"] = {};
dict2["Ballarat"] = {};
dict2["Benalla"] = {};
dict2["Bendigo"] = {};
dict2["Castlemaine"] = {};
dict2["Clifton_Springs"] = {};
dict2["Colac"] = {};
dict2["Craigieburn"] = {};

dict2["Cranbourne"] = {};
dict2["Crib_Point"] = {};
dict2["Geelong"] = {};
dict2["Hamilton"] = {};
dict2["Hastings"] = {};
dict2["Healesville"] = {};
dict2["Horsham"] = {};
dict2["Kyabram"] = {};
dict2["Lakes_Entrance"] = {};

dict2["Lara"] = {};
dict2["Leopold"] = {};
dict2["Maryborough"] = {};
dict2["Melbourne"] = {};
dict2["Melton"] = {};
dict2["Mildura"] = {};
dict2["Morwell"] = {};
dict2["Pakenham"] = {};
dict2["Portland"] = {};

dict2["Sale"] = {};
dict2["Somerville"] = {};
dict2["Stawell"] = {};
dict2["Sunbury"] = {};
dict1["Swan_Hill"] = {};
dict2["Traralgon"] = {};
dict2["Wangaratta"] = {};
dict2["Warragul"] = {};
dict2["Warrnambool"] = {};

dict2["Wodonga"] = {};
dict2["Wonthaggi"] = {};
var json = require('./data.json');
var a = [];
var c = {};
a = json['features'];
for(var i in a){
    for(var b in dict1){
        if(a[i]['properties']['lga_name06'].toString().toLowerCase().indexOf(b.toString().toLowerCase()) != -1){
            c[b] = a[i]['properties']['numeric'];
        }
    }
}

app.get('/sleepDistribute',function(req,res){
    
    terms1.forEach(function (name){
            var url = viewUrlA+name+viewUrlC;
            couch.get(dbname3,url).then(
                function(data,headers,status){
                    var data1 = data.data.rows;
                    for (var k in data1){
                        var tmp = data1[k];
                        
                        
                        if(tmp["key"][0]=="VIC"&&vicMap[tmp["key"][1]] in c){
                            console.log(vicMap[tmp["key"][1]]);
                            if(name=='total_time'){
                                dict2[vicMap[tmp["key"][1]]][name] = tmp["value"]/200;
                            }
                            else{
                                dict2[vicMap[tmp["key"][1]]][name] = tmp["value"];
                            };
                            
                            dict2[vicMap[tmp["key"][1]]]["sleep"] = c[vicMap[tmp["key"][1]]];
                            

                        }
                    };
                    console.log(dict2["Melbourne"]);
                    if(Object.keys(dict2["Melbourne"]).length==3){
                        for (var key in dict2) {
                            if(Object.keys(dict2[key]).length==0){
                                delete dict2[key];
                            };
                            
                        };
                    }
                },
                function(err){
                    res.send(err);
                }
                
            )
            
    })
    res.render('sleepDistribute',{
                            
        sleepDistribute:JSON.stringify(dict2)
    });
});



app.listen(3000,function(){
console.log('Server Started on Port 3000');
});