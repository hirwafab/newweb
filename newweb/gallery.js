// Example of adding interactive elements to the virtual tour
document.addEventListener('DOMContentLoaded', function() {
    var pointsOfInterest = document.querySelectorAll('.point-of-interest');
    pointsOfInterest.forEach(function(point) {
        point.addEventListener('click', function() {
            var info = this.getAttribute('data-info');
            alert(info); // Display information about the point of interest
        });
    });
});
