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

        // Values assigned for each variable (days, hours, minutes, seconds)
      
        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds

        // Exception case. When the exam date is reached, all variables are set to 0
        if (distance < 0) {

            clearInterval(x);
            document.getElementById("days").innerHTML = 0
            document.getElementById("hours").innerHTML = 0
            document.getElementById("minutes").innerHTML = 0
            document.getElementById("seconds").innerHTML = 0
        }

    }, 1000);

};