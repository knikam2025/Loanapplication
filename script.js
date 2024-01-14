document.getElementById('loanForm').addEventListener('submit', function (event) {
    event.preventDefault();
    window.location.href = `confirm.html?fullName=${encodeURIComponent(document.getElementById('fullName').value)}&email=${encodeURIComponent(document.getElementById('email').value)}`;
  });
  
  function calculateLoan() {
    const loanAmountInput = document.getElementById('loanAmount');
    const loanAmountInWords = document.getElementById('loanAmountInWords');
    const loanAmount = parseInt(loanAmountInput.value, 10);
  
    if (isNaN(loanAmount) || loanAmount <= 0) {
      alert('Please enter a valid loan amount.');
      return;
    }
  
    
    // CalculatING EMI
    const interestRate = 8.5; // in percentage
    const tenureInYears = 15;
  
    const monthlyInterestRate = interestRate / 1200; // IT IS Monthly interest rate
    const numberOfPayments = tenureInYears * 12;
  
    const emi = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    
    alert(`Estimated EMI: ${emi.toFixed(2)} Rs.`);
  };
  