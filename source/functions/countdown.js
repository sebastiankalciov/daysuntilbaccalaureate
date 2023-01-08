function Counter() {

    var x = setInterval(function() {
        // Declaring a variable for exam date
        var finalDay = new Date ("Jun 26, 2023, 09:00:00")
        // Declaring a variable with today's date
        var today = new Date().getTime();

        // Time between two dates
        var distance = finalDay - today;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Displaying the info
        document.getElementById("count").innerHTML = days + " Days, " + hours + " Hours, " + minutes + " Minutes, " + seconds + " Seconds";

        // Exception case, when exam date is reached
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("count").innerHTML = "Goodluck! May the force be with you!"
        }

    }, 1000);

};