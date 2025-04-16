document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  // Toggle hamburger menu
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const annualSalaryInput = document.getElementById('annualSalary');
  const roiDaysSpan = document.getElementById('roiDays');
  const calculateButton = document.getElementById('calculateButton');

  // Function to format the input with commas as the user types (if needed)
  function formatNumberInput(e) {
    let input = e.target;
    // Remove any non-digit characters
    let value = input.value.replace(/[^\d]/g, '');
    if (value === "") {
      input.value = "";
      return;
    }
    let number = parseInt(value, 10);
    input.value = number.toLocaleString('en-US');
  }
  annualSalaryInput.addEventListener('input', formatNumberInput);

  function calculateROI() {
    // Remove commas from the input value
    const rawValue = annualSalaryInput.value.replace(/,/g, "");
    const salary = parseFloat(rawValue);
    
    if (!isNaN(salary) && salary >= 50000 && salary <= 500000) {
      const dailyCost = salary / 365; // Based on 365 days per year
      const paybackDays = 120000 / dailyCost;
      roiDaysSpan.textContent = Math.round(paybackDays);
    } else {
      roiDaysSpan.textContent = '';
    }
  }

  calculateButton.addEventListener('click', calculateROI);
});
