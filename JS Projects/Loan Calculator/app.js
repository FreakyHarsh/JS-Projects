const form = document.getElementById('loan-form');

function allTheEvents(){
    form.addEventListener('submit',function(e){

        document.getElementById('loading').style.display = 'block';
        setTimeout(calculateResult,2000)
        e.preventDefault();

    });
}

allTheEvents();

function calculateResult(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedpayments = parseFloat(years.value) *12;
    
    const x = Math.pow(1+calculatedInterest, calculatedpayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedpayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedpayments)- principal).toFixed(2);
        document.getElementById('results').style.display = 'block';
        document.getElementById('loading').style.display = 'none';
 
    }
    else{
        errorAlert('Please enter the valid information');
    }
}

function errorAlert(error){
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    const div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.appendChild(document.createTextNode(error));
        const card = document.querySelector('.card');
        const heading = document.querySelector('.heading');
        card.insertBefore(div,heading);

        setTimeout(clearError,3000);
}

function clearError(e){
    document.querySelector('.alert').remove();
}