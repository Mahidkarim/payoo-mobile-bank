document.getElementById('add-btn').addEventListener('click', function(e){
     e.preventDefault()



     const selectBankValue = document.getElementById("select-bank").value

     const accountNumberValue = document.getElementById("account-Number").value

     const addAmountValue = parseInt(document.getElementById("add-amount").value)

     const pinNumberValue = document.getElementById("pin-number").value


        const totalBalanceValue = parseInt(document.getElementById('balance').innerText)

        
         const totalAmount = addAmountValue + totalBalanceValue;

        document.getElementById('balance').innerText = totalAmount


    
})