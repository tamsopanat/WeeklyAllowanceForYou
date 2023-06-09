function get_value(ID) {
  return parseInt(document.getElementById(ID).value) || 0;
}

function sum_value(dataDict) {
  var values = Object.values(dataDict);
  const sum = values.reduce((accumulator, value) => {
    console.log(value);
    return accumulator + parseInt(value);
  }, 0);
  return sum;
}

function program(event) {
  event.preventDefault();
  // Dictionary
  let name = document.getElementById("name").value;
  let all_expenses = {
    food: get_value("food") * 7,
    drink: get_value("drink") * 7,
    cloth: get_value("cloth"),
    transportation: get_value("transportation") * 7,
    game: get_value("game"),
    other: get_value("other"),
  };

  console.log(name);
  console.log(food);

  // Sum computing
  let weeklyExpenses = sum_value(all_expenses).toLocaleString();
  document.getElementById("resultText").innerHTML =
    name + "<br>You should have " + weeklyExpenses + " Baht per week.";

  //Pie chart creating
  let data = {
    labels: Object.keys(all_expenses),
    datasets: [
      {
        label: name + "'s Weekly Expenses",
        data: Object.values(all_expenses),
        backgroundColor: [
          "#e76666",
          "#f0d582",
          "#e5a478",
          "#5e4e4e",
          "#ED9BAE",
          "#616265",
        ],
        hoverOffset: 4,
      },
    ],
  };

  myChart = document.getElementById("myChart");
  new Chart(myChart, {
    type: "doughnut",
    data: data,
  });

  document.getElementById("myForm").reset();
}

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", program);
