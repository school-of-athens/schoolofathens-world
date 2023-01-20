
exports.getDate = () => {
    // var options = {day: "numeric", month: "numeric", year: "numeric"};

    var time = new Date();

    return time.toLocaleDateString("en-US");
}