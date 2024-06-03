load.classList.add('active');
window.onload = () => {
    // ---------------- Variables ----------------
    let projectmenuItems = document.querySelectorAll('.menu > ul  a');
    let projectsItems = document.querySelectorAll('.items .item');

    let skills = document.getElementById('skills');
    let hero = document.getElementById('hero');
    let heroBtn = document.querySelector('.hero-btn');

    let menuItems = document.querySelectorAll('nav .links');
    let pages = document.querySelectorAll('.page .pages');

    let formInputs = document.querySelectorAll('.form .form-input');
    let formText = document.querySelector('.form-textarea');
    let formBtn = document.getElementById('form-btn');

    let modal = document.getElementById('modal');
    let closeModalBnt = document.getElementById('close-btn');

    let load = document.getElementById('load');

    // ---------------- Events ----------------
    setTimeout(() => {
        load.classList.remove('active');
        hero.classList.add('active');
    }, 1500);



    // on click in form button event
    formBtn.addEventListener('click', () => {
        validate();
        if (count == 0 && count2 == 0 && count3 == 0) {
            modal.classList.add('active');
            clearInputs();
        }
    });

    // close modal event
    closeModalBnt.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    heroBtn.addEventListener('click', () => {
        skills.classList.add('active');
        hero.classList.remove('active');
        document.getElementById('skill-menu').classList.add('active');
        document.getElementById('home-item').classList.remove('active');
    });

    // project items fillter
    projectmenuItems.forEach((el) => {
        el.addEventListener('click', (ele) => {
            projectmenuItems.forEach((el) => {
                el.classList.remove('active');
            });
            ele.currentTarget.classList.add('active');
            projectsItems.forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
                el.classList.add('unactive');
            });
            document.querySelectorAll((ele.currentTarget.dataset.show)).forEach((el) => {
                el.classList.remove('unactive');
                el.classList.add('active');
            });
        });
    });

    // pages fillter
    menuItems.forEach((el) => {
        el.addEventListener('click', (el) => {
            menuItems.forEach((el) => {
                el.classList.remove('active');
            })
            el.currentTarget.classList.add('active');

            pages.forEach((el) => {
                el.classList.remove('active');
            })
            document.querySelector((el.currentTarget.dataset.out)).classList.add('active');
        });
    });

    // on write validation
    formInputs.forEach((el) => {
        el.onfocus = function () {
            this.oninput = function () {
                if (this.value === "" || this.value == null) {
                    if (this.classList.contains('valid')) {
                        this.classList.remove('valid');
                    }
                    document.querySelector(this.dataset.form).classList.add('invalid');
                    this.classList.add('invalid');
                } else {
                    if (this.classList.contains('invalid')) {
                        this.classList.remove('invalid');
                    }
                    document.querySelector(this.dataset.form).classList.remove('invalid');
                    this.classList.add('valid');
                }
            }
        }
    });

    let count = 0;
    let count2 = 0;
    let count3 = 0;
    //validate method
    function validate() {
        formInputs.forEach((el) => {
            if (el.value === "" || el.value == null) {
                document.querySelector(el.dataset.form).classList.add('invalid')
                el.classList.add('invalid');
                count++;
            } else {
                if (count !== 0) {
                    count--;
                }
            }
        });

        if (email.value === "") {
            count3++;
        } else {
            count2 = 0;
        }
    }

    // clear inputs
    function clearInputs() {
        formInputs.forEach((el) => {
            el.value = "";
            el.classList.remove('valid');
        });
    }

    // email input validation
    let email = document.querySelector('.form-email');
    let targetChar = '@';

    email.onfocus = function () {
        email.oninput = function () {
            let index = email.value.indexOf(targetChar);
            if (index !== -1) {
                let textSlice = email.value.slice(index);
                checkEmailFormat(textSlice);
            } else {
                checkEmailValue();
            }
            count2++;
        }
    }

    function checkEmailFormat(extention) {
        if (extention === "@gmail.com" || extention === "@outlook.com" || extention === "@hotmail.com" || extention === "outlook.sa") {
            email.classList.add('valid');
            extention = "";
            if (email.classList.contains('invalid')) {
                email.classList.remove('invalid');
            }
            document.querySelector(email.dataset.form).classList.remove('invalid');
            count2 = 0;
            count3 = 0;
        } else {
            if (email.classList.contains('valid')) {
                email.classList.remove('valid');
            }
            email.classList.add('invalid');

            if (!(document.querySelector(email.dataset.form).classList.contains('invalid'))) {
                document.querySelector(email.dataset.form).classList.add('invalid');
            }
            document.querySelector(email.dataset.form).innerText = "email not valid!";
        }
    }

    function checkEmailValue() {
        email.classList.add('invalid');
        if (email.value === "") {
            document.querySelector(email.dataset.form).innerText = "The email is reqierd!";
        } else {
            document.querySelector(email.dataset.form).innerText = "email not valid!";
        }
        document.querySelector(email.dataset.form).classList.add('invalid');
    }

}