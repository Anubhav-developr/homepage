var name = "Gaurav";
var worker = new Worker('update_time.js')

worker.onmessage = function(event) {
    document.getElementById("time").textContent = event.data[0] + ":" + event.data[1] + " " + event.data[2];
    document.getElementById("greeting").textContent = "Good " + event.data[3] + ", " + name;
};
