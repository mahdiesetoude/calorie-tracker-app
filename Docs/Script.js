
let totalCalories = 0;

function addFood() {
  const food = document.getElementById("foodInput").value;
  const calories = parseInt(document.getElementById("calorieInput").value);

  if (food && !isNaN(calories)) {
    const li = document.createElement("li");
    li.textContent = `${food}: ${calories} کالری`;
    document.getElementById("foodList").appendChild(li);

    totalCalories += calories;
    document.getElementById("totalCalories").textContent = `کالری کل: ${totalCalories}`;
  }
}
