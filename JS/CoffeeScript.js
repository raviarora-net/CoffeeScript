// Generated by CoffeeScript 1.10.0
(function() {
  var list, num1;

  window.custom || (window.custom = {});

  window.custom.hello = function() {
    return alert("Hello");
  };

  window.custom.square1 = function(x) {
    return alert(x * x);
  };

  window.custom.fill = function(container, liquid) {
    if (container == null) {
      container = "Baskit";
    }
    if (liquid == null) {
      liquid = "water";
    }
    return alert("Fill  " + container + " with " + liquid + "..");
  };

  window.custom.condition = function(container) {
    if (container == null) {
      container = "Bukit";
    }
    if (container != null) {
      return alert("Container is  " + container + " ");
    } else {
      return alert("Container is not define ");
    }
  };

  list = [1, 2, 3, 4, 5, 6];

  window.custom.printseries = function() {
    var i, len, num, results;
    results = [];
    for (i = 0, len = list.length; i < len; i++) {
      num = list[i];
      results.push(console.log(num));
    }
    return results;
  };

  num1 = 10;

  window.custom.printseriesWhile = function() {
    var results;
    results = [];
    while (num1 -= 1) {
      results.push(console.log(num1));
    }
    return results;
  };

  window.custom.switchSeries = function(day) {
    switch (day) {
      case "Mon":
      case 1:
        return alert("Day1");
      case "Tues":
      case 2:
        return alert("Day2");
      case "Wed":
      case 3:
        return alert("Day3");
      case "Thrus":
      case 4:
        return alert("Day4");
      case "Fri":
      case 5:
        return alert("Day5");
      case "Sat":
      case 6:
        return alert("Day6");
      default:
        return "Day7";
    }
  };

}).call(this);
