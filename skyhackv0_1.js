gCurrentlyTrying = true;
var trying = true;
var step = 0;
var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var p = [0, 0, 0, 0, 0, 0, 0, 0];
function login(){
    gLoginMessage="Logging in...";
    getExtraInfo('skyporthttp.w','tryLogin','login','');
}
for(var i = 0; i < 100; i++){
    try{
        //do not try certain passwords
        a[step]++;
        if(a[0] == 27){
            a[step] = 0;
            step++;
        }
        console.log(a[p[0]] + a[p[1]] + a[p[2]] + a[p[3]] + a[p[4]] + a[p[5]] + a[p[6]] + a[p[7]]);
    }catch(e){
        step = 0;
    }
}
