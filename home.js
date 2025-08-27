



// add money section 

const pin = 1234

document.getElementById('add-btn').addEventListener('click', function (e) {
    e.preventDefault()

    const selectBankValue = document.getElementById("select-bank").value

    const accountNumberValue = document.getElementById("account-Number").value


    const addAmountValue = parseInt(document.getElementById("add-amount").value)

    const pinNumberValue = parseInt(document.getElementById("pin-number").value)

    if (accountNumberValue.length < 11) {
        alert('Please Provide a Valid Account Number')
        return;
    }

    else if (pinNumberValue !== pin) {
        alert('Please provide a valid pin')
        return;

    }

    const totalBalanceValue = parseInt(document.getElementById('balance').innerText)
    const totalAmount = addAmountValue + totalBalanceValue;
    document.getElementById('balance').innerText = totalAmount
})



document.getElementById('add-money').addEventListener('click', function (e) {

    const forms = document.getElementsByClassName('form')

    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById('add-money-info').style.display = 'block'

})




//  cash out section

document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()

    const agentNumber = document.getElementById('agent-number').value

    const withdrawAmount = parseInt(document.getElementById('Withdraw-amount').value)

    const pinNumberWithdraw = parseInt(document.getElementById('pin-number-withdraw').value)

    if (agentNumber.length < 11) {
        alert('Please Provide a Valid Agent Number')
        return;
    }

    else if (pinNumberWithdraw !== pin) {
        alert('Please provide a valid pin')
        return;

    }


    const totalBalanceValue = parseInt(document.getElementById('balance').innerText)

    const totalAmount = totalBalanceValue - withdrawAmount;
    document.getElementById('balance').innerText = totalAmount




})

document.getElementById('cash-out').addEventListener('click', function (e) {

    const forms = document.getElementsByClassName('form')

    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById('cash-out-info').style.display = 'block'

})







//  Transfer money section

document.getElementById("transfer-info").addEventListener('click', function (e) {
    e.preventDefault()

    const tranferAccount = document.getElementById('tranfer-account').value

    const transferAmount = parseInt(document.getElementById('transfer-amount').value)

    const transferPin = parseInt(document.getElementById('transfer-pin').value)

    if (tranferAccount.length < 11) {
        alert('Please Provide a Valid Account Number')
        return;
    }

    else if (transferPin !== pin) {
        alert('Please provide a valid pin')
        return;

    }


    const totalBalanceValue = parseInt(document.getElementById('balance').innerText)

    const totalAmount = totalBalanceValue - transferAmount;
    document.getElementById('balance').innerText = totalAmount




})

document.getElementById('transfer-money').addEventListener('click', function (e) {

    const forms = document.getElementsByClassName('form')

    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById('transfer-info').style.display = 'block'

})






// //  Get bonus section

// document.getElementById('').addEventListener('click', function (e) {
//     e.preventDefault()

//     const agentNumber = document.getElementById('').value



//     const totalBalanceValue = parseInt(document.getElementById('balance').innerText)

//     const totalAmount = totalBalanceValue - withdrawAmount;
//     document.getElementById('balance').innerText = totalAmount




// })

document.getElementById('get-bonus').addEventListener('click', function (e) {

    const forms = document.getElementsByClassName('form')

    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById('bonus-info').style.display = 'block'

})




//  pay bill section

// document.getElementById('').addEventListener('click', function (e) {
//     e.preventDefault()

//     const agentNumber = document.getElementById('').value

//     const withdrawAmount = parseInt(document.getElementById('').value)

//     const pinNumberWithdraw = parseInt(document.getElementById('').value)

//     if (agentNumber.length < 11) {
//         alert('Please Provide a Valid Agent Number')
//         return;
//     }

//     else if (pinNumberWithdraw !== pin) {
//         alert('Please provide a valid pin')
//         return;

//     }


//     const totalBalanceValue = parseInt(document.getElementById('balance').innerText)

//     const totalAmount = totalBalanceValue - withdrawAmount;
//     document.getElementById('balance').innerText = totalAmount




// })


document.getElementById('pay-bill').addEventListener('click', function (e) {

    const forms = document.getElementsByClassName('form')

    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById('pay-bill-info').style.display = 'block'

})


