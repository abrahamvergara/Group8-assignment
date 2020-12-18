window.onload = function () {

    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    var btn = document.getElementById("myBtn");
    var btn2 = document.getElementById("myBtn2");
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close2")[0];



    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    btn2.onclick = function() {
        modal.style.display = "block";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    window2.onclick = function(event) {
        if (event.target == modal2) {
            modal.style.display = "none";
        }

    }

}