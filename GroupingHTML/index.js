var usr_history = {};
var load_time = Date.now();

function get_time() {
    return Date.now() - load_time;
}

function WriteToLog(event) {
    console.log("TODO: keep track of condition, pid, other");

    var time = get_time();
    usr_history[time] = event;
    var url_param_str = "?event=" + encodeURIComponent(event) + "&time=" + time.toString();
    
    const Http = new XMLHttpRequest();
    const url = 'http://replaceThisWithTheRealURL1234567890.com/sink.html';
    //Http.open("GET", url + url_param_str);
    //Http.send();
}

function change_page(new_page){
    console.log("TODO: log page data");
    console.log("TODO: pass along important url params");





    window.location.href = new_page;




    

}

