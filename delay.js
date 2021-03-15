// 20 milliseconds to 8
var OFFSET = 20; 

var now = new Date();

var eight = new Date();
eight.setHours(16);
eight.setMinutes(43);
eight.setSeconds(0);

var delay = eight - now - OFFSET;

if(delay <=0){
    console.log('no delay')
    $done({});
}else{
    setTimeout(function(){
        console.log('delay for '+ delay +' milliseconds')
        $done({});
    }, delay)
}
