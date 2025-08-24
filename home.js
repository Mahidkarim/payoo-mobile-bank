

const pin = 1234

document.getElementById('add-btn').addEventListener('click', function (e) {
    e.preventDefault()



    const selectBankValue = document.getElementById("select-bank").value

    const accountNumberValue = document.getElementById("account-Number").value


    const addAmountValue = parseInt(document.getElementById("add-amount").value)

    const pinNumberValue = parseInt(document.getElementById("pin-number").value)

    if( accountNumberValue.length < 11 ){
        alert('Please Provide a Valid Account Number')
        return;
    }

    else if(pinNumberValue !== pin){
        alert('Please provide a valid pin')
        return;

    }


    const totalBalanceValue = parseInt(document.getElementById('balance').innerText)


    const totalAmount = addAmountValue + totalBalanceValue;

    document.getElementById('balance').innerText = totalAmount



})