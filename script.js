window.onload = function () {
    var signUp = document.getElementById('signUp')
    var signIn = document.getElementById('signIn')
    var buttons = document.getElementById('buttons');
    var allUsers = JSON.parse(localStorage.getItem('allusers')) || [];

    if (!Array.isArray(allUsers)) {
        allUsers = [];
    }
    console.log(allUsers);

    var firstname = lastname = email = Password = '';

    document.getElementById('signup_forward').onclick = function () {
        signIn.style.display = 'none'

        signUp.style.display = 'flex'
        buttons.style.transform = 'translateY(600px)'
    }

    document.getElementById('signin_forward').onclick = function () {
        signUp.style.display = 'none'

        signIn.style.display = 'flex'
        buttons.style.transform = 'translateY(500px)'
    }

    class User {
        constructor(firstname, lastname, email, password) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.email = email;
            this.password = password;
        }
    }

    function displayUserData(user) {
        var userDataDiv = document.getElementById('userData')
        userDataDiv.style.display = 'flex'
        userDataDiv.style.alignItems = 'center'
        userDataDiv.style.justifyContent = 'center'
        userDataDiv.style.flexDirection = 'column'

        document.getElementById('firstNameDisplay').innerText = user.firstname
        document.getElementById('lastNameDisplay').innerText = user.lastname
        document.getElementById('emailDisplay').innerText = user.email
    }

    function Register() {
        var firstName = document.getElementById('firstName').value
        var lastName = document.getElementById('lastName').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value

        // if (firstName == '' && lastName == '' && email == '' && password == '') {
        //     alert('Error! Empty')
        // }
        var firstNameInp = document.getElementById('firstName')
        var lastNameInp = document.getElementById('lastName')
        var emailInp = document.getElementById('email')
        var passwordInp = document.getElementById('password')


        var validationName = /[.,\/@¬:~]/;
        var validationLast = /[.,\/@¬:~]/;
        var validationEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        function name() {   //...........................FIRST NAME........................//
            if (firstName == '') {
                firstNameInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    firstNameInp.style.animation = ''
                }, 700);
            } else if (!isNaN(+firstName)) {
                firstNameInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    firstNameInp.style.animation = ''
                }, 700);
            } else if (validationName.test(firstName)) {
                firstNameInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    firstNameInp.style.animation = ''
                }, 700);
            } else {
                firstNameInp.style.animation = 'shakeTrue 2s ease forwards'
                setTimeout(() => {
                    firstNameInp.style.animation = ''
                }, 2000);
                firstname = firstName
            }
        }
        name()


        function surname() {    //.......................LAST NAME..........................//
            if (lastName == '') {
                lastNameInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    lastNameInp.style.animation = ''
                }, 700);
            } else if (!isNaN(+lastName)) {
                lastNameInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    lastNameInp.style.animation = ''
                }, 700);
            } else if (validationLast.test(lastName)) {
                lastNameInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    lastNameInp.style.animation = ''
                }, 700);
            } else {
                lastNameInp.style.animation = 'shakeTrue 2s ease forwards'
                setTimeout(() => {
                    lastNameInp.style.animation = ''
                }, 2000);
                lastname = lastName
            }
        }
        surname()


        function em() {      //.......................EMAIL..........................//
            if (email == '') {
                emailInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    emailInp.style.animation = ''
                }, 700);
            } else if (!isNaN(+email)) {
                emailInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    emailInp.style.animation = ''
                }, 700);
            } else if (!validationEmail.test(email)) {
                emailInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    emailInp.style.animation = ''
                }, 700);
            } else {
                emailInp.style.animation = 'shakeTrue 2s ease forwards'
                setTimeout(() => {
                    emailInp.style.animation = ''
                }, 2000);

                this.email = email
            }
        }
        em()

        function pass() {      //.......................PASSWORD..........................//
            if (password == '') {
                passwordInp.style.animation = 'shakeError .2s 3 ease forwards'
                setTimeout(() => {
                    passwordInp.style.animation = ''
                }, 700);
            } else if (password.length <= 6) {
                passwordInp.style.animation = 'password1 2s ease forwards'
                setTimeout(() => {
                    passwordInp.style.animation = ''
                }, 2000);
            } else if (password.length <= 10) {
                passwordInp.style.animation = 'password2 2s ease forwards'
                setTimeout(() => {
                    passwordInp.style.animation = ''
                }, 2000);
            } else {
                passwordInp.style.animation = 'shakeTrue 2s ease forwards'
                setTimeout(() => {
                    passwordInp.style.animation = ''
                }, 2000);

                password = password
            }
        }
        pass()

        if (!firstName == '' && !lastName == '' && !email == '' && !password == '') {
            signUp.style.display = 'none'
            signIn.style.display = 'flex'
            var user = new User(firstName, lastName, email, password);
            allUsers.push(user);
            console.log(allUsers);
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('allusers', JSON.stringify(allUsers))
        }
    }

    function login() {
        document.getElementById('userData').style.display = 'none'
        var loginFirstName = document.getElementById('loginfirstName').value
        var password = document.getElementById('loginpassword').value

        var loggedInUser = allUsers.find(user => user.firstname === loginFirstName && user.password === password);
        console.log(loggedInUser);
        if (loggedInUser) {
            alert("Thank's for logining");
            buttons.style.display = 'none';
            signIn.style.display = 'none';
            displayUserData(loggedInUser)
            localStorage.setItem('currentUser', JSON.stringify(loggedInUser));
        } else {
            alert('User is undifuned, please register again');
        }
    }

    window.Register = Register;
    window.login = login;
}