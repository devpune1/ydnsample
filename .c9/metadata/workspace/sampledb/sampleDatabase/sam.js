{"filter":false,"title":"sam.js","tooltip":"/sampledb/sampleDatabase/sam.js","undoManager":{"mark":97,"position":97,"stack":[[{"start":{"row":25,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["var optionEncryption = {","    ","   ","    Encryption: {","      expiration: 1000*15, // optional data expiration in ms.","      encryptKey: true,   // optional encrypt primary key","      method: 'rc4', // default is 'acs-cbc'","      secrets: [{","        name: 'aaaa',","        key: 'aYHF6vfuGHpfWS*eRLrPQxZjSó~É5c6HjCscqDqRtZasp¡JWSMGaW'","      }]","    }","    ","};","","var cipher = new ydn.crypto.Cipher(optionEncryption);","","var encrypted = cipher.encrypt({msg: 'This is a scret'});","",""],"id":2}],[{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"insert","lines":["a"],"id":3}],[{"start":{"row":44,"column":1},"end":{"row":44,"column":2},"action":"insert","lines":["l"],"id":4}],[{"start":{"row":44,"column":2},"end":{"row":44,"column":3},"action":"insert","lines":["e"],"id":5}],[{"start":{"row":44,"column":3},"end":{"row":44,"column":4},"action":"insert","lines":["r"],"id":6}],[{"start":{"row":44,"column":4},"end":{"row":44,"column":5},"action":"insert","lines":["t"],"id":7}],[{"start":{"row":44,"column":5},"end":{"row":44,"column":7},"action":"insert","lines":["()"],"id":8}],[{"start":{"row":44,"column":6},"end":{"row":44,"column":7},"action":"insert","lines":["e"],"id":9}],[{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"insert","lines":["b"],"id":10}],[{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"remove","lines":["b"],"id":11}],[{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"insert","lines":["n"],"id":12},{"start":{"row":44,"column":8},"end":{"row":44,"column":9},"action":"insert","lines":["c"]}],[{"start":{"row":44,"column":9},"end":{"row":44,"column":10},"action":"insert","lines":["r"],"id":13}],[{"start":{"row":44,"column":10},"end":{"row":44,"column":11},"action":"insert","lines":["y"],"id":14}],[{"start":{"row":44,"column":6},"end":{"row":44,"column":11},"action":"remove","lines":["encry"],"id":15},{"start":{"row":44,"column":6},"end":{"row":44,"column":15},"action":"insert","lines":["encrypted"]}],[{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"insert","lines":[";"],"id":16}],[{"start":{"row":44,"column":6},"end":{"row":44,"column":7},"action":"insert","lines":["\""],"id":17}],[{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"insert","lines":["\""],"id":18}],[{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"insert","lines":["E"],"id":19}],[{"start":{"row":44,"column":8},"end":{"row":44,"column":9},"action":"insert","lines":["S"],"id":20}],[{"start":{"row":44,"column":9},"end":{"row":44,"column":10},"action":"insert","lines":["S"],"id":21}],[{"start":{"row":44,"column":10},"end":{"row":44,"column":11},"action":"insert","lines":["A"],"id":22}],[{"start":{"row":44,"column":11},"end":{"row":44,"column":12},"action":"insert","lines":["G"],"id":23}],[{"start":{"row":44,"column":12},"end":{"row":44,"column":13},"action":"insert","lines":["E"],"id":24}],[{"start":{"row":44,"column":7},"end":{"row":44,"column":8},"action":"insert","lines":["M"],"id":25}],[{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["+"],"id":26}],[{"start":{"row":46,"column":1},"end":{"row":97,"column":2},"action":"remove","lines":["*","var getAllTodoItems = function () {","  var todos = document.getElementById(\"todoItems\");","  todos.innerHTML = \"\";","","  var df = db.values('user');","","  df.done(function (items) {","    var n = items.length;","  ","    for (var i = 0; i < n; i++) {","      renderTodo(items[i]);","  ","    }","  });","","  df.fail(function (e) {","    throw e;","  })","};","","var renderTodo = function (row) {","  ","  ","  var todos = document.getElementById(\"todoItems\");","  var li = document.createElement(\"li\");","  var a = document.createElement(\"a\");","  var t = document.createTextNode(row.name);","  ","  ","  ","   var todos = document.getElementById(\"todoItems\");","  var li = document.createElement(\"li\");","  var a = document.createElement(\"a\");","  var t = document.createTextNode(row.email);","  ","   var todos = document.getElementById(\"todoItems\");","  var li = document.createElement(\"li\");","  var a = document.createElement(\"a\");","  var t = document.createTextNode(row.number);","","  a.addEventListener(\"click\", function () {","    deleteTodo(row.email);","  }, false);","","  a.textContent = \" [Delete]\";","  li.appendChild(t);","  li.appendChild(a);","  todos.appendChild(li)","};","","*/"],"id":27}],[{"start":{"row":46,"column":0},"end":{"row":46,"column":1},"action":"remove","lines":["/"],"id":28}],[{"start":{"row":10,"column":25},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":29},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"insert","lines":[" * "]}],[{"start":{"row":26,"column":0},"end":{"row":39,"column":2},"action":"remove","lines":["var optionEncryption = {","    ","   ","    Encryption: {","      expiration: 1000*15, // optional data expiration in ms.","      encryptKey: true,   // optional encrypt primary key","      method: 'rc4', // default is 'acs-cbc'","      secrets: [{","        name: 'aaaa',","        key: 'aYHF6vfuGHpfWS*eRLrPQxZjSó~É5c6HjCscqDqRtZasp¡JWSMGaW'","      }]","    }","    ","};"],"id":30}],[{"start":{"row":12,"column":3},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":13,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":13,"column":1},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":14,"column":1},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":15,"column":1},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":34},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":13,"column":1},"end":{"row":26,"column":2},"action":"insert","lines":["var optionEncryption = {","    ","   ","    Encryption: {","      expiration: 1000*15, // optional data expiration in ms.","      encryptKey: true,   // optional encrypt primary key","      method: 'rc4', // default is 'acs-cbc'","      secrets: [{","        name: 'aaaa',","        key: 'aYHF6vfuGHpfWS*eRLrPQxZjSó~É5c6HjCscqDqRtZasp¡JWSMGaW'","      }]","    }","    ","};"],"id":35}],[{"start":{"row":30,"column":44},"end":{"row":30,"column":45},"action":"insert","lines":[","],"id":36}],[{"start":{"row":30,"column":45},"end":{"row":30,"column":46},"action":"insert","lines":["o"],"id":37}],[{"start":{"row":30,"column":46},"end":{"row":30,"column":47},"action":"insert","lines":["p"],"id":38}],[{"start":{"row":30,"column":45},"end":{"row":30,"column":47},"action":"remove","lines":["op"],"id":39},{"start":{"row":30,"column":45},"end":{"row":30,"column":61},"action":"insert","lines":["optionEncryption"]}],[{"start":{"row":324,"column":67},"end":{"row":324,"column":68},"action":"remove","lines":["b"],"id":41}],[{"start":{"row":324,"column":66},"end":{"row":324,"column":67},"action":"remove","lines":["d"],"id":42}],[{"start":{"row":324,"column":65},"end":{"row":324,"column":66},"action":"remove","lines":["e"],"id":43}],[{"start":{"row":324,"column":64},"end":{"row":324,"column":65},"action":"remove","lines":["l"],"id":44}],[{"start":{"row":324,"column":63},"end":{"row":324,"column":64},"action":"remove","lines":["p"],"id":45}],[{"start":{"row":324,"column":58},"end":{"row":324,"column":59},"action":"remove","lines":["b"],"id":46}],[{"start":{"row":324,"column":57},"end":{"row":324,"column":58},"action":"remove","lines":["d"],"id":47},{"start":{"row":324,"column":56},"end":{"row":324,"column":57},"action":"remove","lines":["e"]},{"start":{"row":324,"column":55},"end":{"row":324,"column":56},"action":"remove","lines":["l"]}],[{"start":{"row":324,"column":54},"end":{"row":324,"column":55},"action":"remove","lines":["p"],"id":48},{"start":{"row":324,"column":53},"end":{"row":324,"column":54},"action":"remove","lines":["m"]}],[{"start":{"row":324,"column":52},"end":{"row":324,"column":53},"action":"remove","lines":["a"],"id":49}],[{"start":{"row":324,"column":51},"end":{"row":324,"column":52},"action":"remove","lines":["s"],"id":50}],[{"start":{"row":324,"column":50},"end":{"row":324,"column":51},"action":"remove","lines":["/"],"id":51}],[{"start":{"row":324,"column":51},"end":{"row":324,"column":52},"action":"insert","lines":["/"],"id":52}],[{"start":{"row":324,"column":51},"end":{"row":324,"column":52},"action":"insert","lines":["s"],"id":53}],[{"start":{"row":324,"column":52},"end":{"row":324,"column":53},"action":"insert","lines":["a"],"id":54}],[{"start":{"row":324,"column":53},"end":{"row":324,"column":54},"action":"insert","lines":["m"],"id":55}],[{"start":{"row":324,"column":54},"end":{"row":324,"column":55},"action":"insert","lines":["p"],"id":56}],[{"start":{"row":324,"column":55},"end":{"row":324,"column":56},"action":"insert","lines":["l"],"id":57}],[{"start":{"row":324,"column":56},"end":{"row":324,"column":57},"action":"insert","lines":["e"],"id":58}],[{"start":{"row":324,"column":57},"end":{"row":324,"column":58},"action":"insert","lines":["D"],"id":59}],[{"start":{"row":324,"column":58},"end":{"row":324,"column":59},"action":"insert","lines":["a"],"id":60}],[{"start":{"row":324,"column":59},"end":{"row":324,"column":60},"action":"insert","lines":["t"],"id":61}],[{"start":{"row":324,"column":60},"end":{"row":324,"column":61},"action":"insert","lines":["a"],"id":62}],[{"start":{"row":324,"column":61},"end":{"row":324,"column":62},"action":"insert","lines":["b"],"id":63}],[{"start":{"row":324,"column":62},"end":{"row":324,"column":63},"action":"insert","lines":["a"],"id":64}],[{"start":{"row":324,"column":63},"end":{"row":324,"column":64},"action":"insert","lines":["s"],"id":65}],[{"start":{"row":324,"column":64},"end":{"row":324,"column":65},"action":"insert","lines":["e"],"id":66}],[{"start":{"row":83,"column":0},"end":{"row":83,"column":22},"action":"remove","lines":[" // getAllTodoItems();"],"id":67}],[{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"remove","lines":["2"],"id":68}],[{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":["1"],"id":69}],[{"start":{"row":30,"column":60},"end":{"row":30,"column":61},"action":"remove","lines":["n"],"id":70}],[{"start":{"row":30,"column":59},"end":{"row":30,"column":60},"action":"remove","lines":["o"],"id":71},{"start":{"row":30,"column":58},"end":{"row":30,"column":59},"action":"remove","lines":["i"]}],[{"start":{"row":30,"column":57},"end":{"row":30,"column":58},"action":"remove","lines":["t"],"id":72}],[{"start":{"row":30,"column":56},"end":{"row":30,"column":57},"action":"remove","lines":["p"],"id":73},{"start":{"row":30,"column":55},"end":{"row":30,"column":56},"action":"remove","lines":["y"]}],[{"start":{"row":30,"column":54},"end":{"row":30,"column":55},"action":"remove","lines":["r"],"id":74}],[{"start":{"row":30,"column":53},"end":{"row":30,"column":54},"action":"remove","lines":["c"],"id":75},{"start":{"row":30,"column":52},"end":{"row":30,"column":53},"action":"remove","lines":["n"]}],[{"start":{"row":30,"column":51},"end":{"row":30,"column":52},"action":"remove","lines":["E"],"id":76}],[{"start":{"row":30,"column":50},"end":{"row":30,"column":51},"action":"remove","lines":["n"],"id":77},{"start":{"row":30,"column":49},"end":{"row":30,"column":50},"action":"remove","lines":["o"]},{"start":{"row":30,"column":48},"end":{"row":30,"column":49},"action":"remove","lines":["i"]},{"start":{"row":30,"column":47},"end":{"row":30,"column":48},"action":"remove","lines":["t"]}],[{"start":{"row":30,"column":46},"end":{"row":30,"column":47},"action":"remove","lines":["p"],"id":78},{"start":{"row":30,"column":45},"end":{"row":30,"column":46},"action":"remove","lines":["o"]},{"start":{"row":30,"column":44},"end":{"row":30,"column":45},"action":"remove","lines":[","]}],[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["t"],"id":79}],[{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["a"],"id":80}],[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["b"],"id":81}],[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["l"],"id":82}],[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["e"],"id":83}],[{"start":{"row":34,"column":17},"end":{"row":34,"column":18},"action":"insert","lines":["t"],"id":84}],[{"start":{"row":34,"column":13},"end":{"row":34,"column":18},"action":"remove","lines":["usert"],"id":85},{"start":{"row":34,"column":13},"end":{"row":34,"column":22},"action":"insert","lines":["usertable"]}],[{"start":{"row":70,"column":14},"end":{"row":70,"column":15},"action":"insert","lines":["t"],"id":86}],[{"start":{"row":70,"column":15},"end":{"row":70,"column":16},"action":"insert","lines":["a"],"id":87}],[{"start":{"row":70,"column":10},"end":{"row":70,"column":16},"action":"remove","lines":["userta"],"id":88},{"start":{"row":70,"column":10},"end":{"row":70,"column":19},"action":"insert","lines":["usertable"]}],[{"start":{"row":102,"column":26},"end":{"row":102,"column":27},"action":"insert","lines":["t"],"id":89}],[{"start":{"row":102,"column":27},"end":{"row":102,"column":28},"action":"insert","lines":["a"],"id":90}],[{"start":{"row":102,"column":28},"end":{"row":102,"column":29},"action":"insert","lines":["b"],"id":91}],[{"start":{"row":102,"column":22},"end":{"row":102,"column":29},"action":"remove","lines":["usertab"],"id":92},{"start":{"row":102,"column":22},"end":{"row":102,"column":31},"action":"insert","lines":["usertable"]}],[{"start":{"row":105,"column":37},"end":{"row":105,"column":38},"action":"remove","lines":[" "],"id":93}],[{"start":{"row":105,"column":37},"end":{"row":105,"column":38},"action":"insert","lines":["t"],"id":94}],[{"start":{"row":105,"column":33},"end":{"row":105,"column":38},"action":"remove","lines":["usert"],"id":95},{"start":{"row":105,"column":33},"end":{"row":105,"column":42},"action":"insert","lines":["usertable"]}],[{"start":{"row":128,"column":26},"end":{"row":128,"column":27},"action":"insert","lines":["t"],"id":96}],[{"start":{"row":128,"column":27},"end":{"row":128,"column":28},"action":"insert","lines":["a"],"id":97}],[{"start":{"row":128,"column":22},"end":{"row":128,"column":28},"action":"remove","lines":["userta"],"id":98},{"start":{"row":128,"column":22},"end":{"row":128,"column":31},"action":"insert","lines":["usertable"]}],[{"start":{"row":164,"column":23},"end":{"row":164,"column":24},"action":"insert","lines":["t"],"id":99}],[{"start":{"row":164,"column":19},"end":{"row":164,"column":24},"action":"remove","lines":["usert"],"id":100},{"start":{"row":164,"column":19},"end":{"row":164,"column":28},"action":"insert","lines":["usertable"]}]]},"ace":{"folds":[],"scrolltop":389,"scrollleft":0,"selection":{"start":{"row":364,"column":0},"end":{"row":364,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1461320417298,"hash":"0b5b08222296d97d2b8e9107cf557e5b2e4840f6"}