function get_value(ID) {
  return document.getElementById(ID).value;
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
  let name = get_value("name");
  const all_expenses = {
    food: get_value("food") * 7,
    drink: get_value("drink") * 7,
    cloth: get_value("cloth"),
    transportation: get_value("transportation") * 7,
    other: get_value("other"),
  };
  // Sum computing
  let weeklyExpenses = sum_value(all_expenses).toLocaleString();
  document.getElementById("resultText").innerHTML = name + "<br>You should have " + weeklyExpenses +" Baht per week."

  //Pie chart creating
  const data = {
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
