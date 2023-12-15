function Counter() {

    var x = setInterval(function() {

        var finalDay = new Date("Jul 1, 2024, 09:00:00")
        var today = new Date().getTime();
        var distance = finalDay - today;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds

        // If the date passed, set every counter to 0
        if (distance < 0) {

            clearInterval(x);
            document.getElementById("days").innerHTML = 0
            document.getElementById("hours").innerHTML = 0
            document.getElementById("minutes").innerHTML = 0
            document.getElementById("seconds").innerHTML = 0
        }
        
    }, 1000);
};
