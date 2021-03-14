var body = $response.body; var obj = JSON.parse(body); obj.data.data.time = obj.data.data.time + 30; body = JSON.stringify(obj); console.log(body); $done(body);
