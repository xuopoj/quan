var body = $response.body; 
console.log(body);
var obj = JSON.parse(body);
obj.data.data.time = obj.data.data.time + 130; 
body = JSON.stringify(obj); 
console.log(body); 
$done(body);
