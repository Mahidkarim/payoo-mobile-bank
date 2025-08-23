
document.getElementById("login-btn").addEventListener('click', function (e) {
    e.preventDefault()


    const phoneNumber = 12345678910
    const pinNumber = 1234

    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    if (mobileNumberValueConverted === phoneNumber && pinNumberValueConverted === pinNumber) {
        window.location.href = './home.html'
    }

    else {
        alert('Invalid Credintials')
    }




})