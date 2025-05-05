window.onload = function () {
    document.addEventListener('click', documentActions);
    function documentActions(e) {
        if (e.target.classList.contains('header__burger')) {
            e.preventDefault();
            const burger = document.querySelector('.header__burger');
            const menu = document.querySelector('.header__menu');
            const menu__link = document.querySelectorAll('.menu__link');

            menu.classList.toggle('_active');

            burger.classList.toggle('_active');
        }
        if (e.target.classList.contains('cookie__button')) {
            document.querySelector('.cookie').classList.add('hide')
            document.querySelector('.cookie').classList.remove('show')
        }
        if (!e.target.classList.contains('cookie__button')) {
            document.querySelector('.cookie').classList.add('hide')
            document.querySelector('.cookie').classList.remove('show')
        }
    }

    window.setInterval(function () {
        const windowInnerWidth = window.innerWidth;

        if (this.x === undefined) this.x = windowInnerWidth;
        this.x--;
        // console.log(this.x);
        document.querySelector('.work_img1 ').style.cssText = ` 
        background-position-x:  ${this.x * 1}px ;
        `;
        document.querySelector('.work_img2 ').style.cssText = ` 
        background-position-x:  ${this.x * 0.6}px ;
        `;
        document.querySelector('.work_img3 ').style.cssText = ` 
        background-position-x:  ${this.x * 0.8}px ;
        `;
        if (this.x < -windowInnerWidth) this.x = windowInnerWidth;

    }, 5);


    const modalTrigger = document.querySelectorAll('.button'),
        modal = document.querySelector('.overlay'),
        cookieEl = document.querySelector('.cookie'),
        modalClose = document.querySelector('.overlay-close');

    function modalShow(modal) {
        modalTrigger.forEach(function (element, index) {
            element.addEventListener('click', () => {
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
            });
        })

    }
    function cookieShow(cookieEl) {
        setTimeout(() => {
            cookieEl.classList.add('show');
            cookieEl.classList.remove('hide');

        }, 2600);
    }
    modalShow(modal);
    cookieShow(cookieEl);

    modalClose.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            modal.classList.add('hide');
        }
    });


    /*Обрарботка Формы */
    //forms
    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/Spinner.gif',
        succsess: 'Thank you! ',
        failure: 'Что-то пошло не так...',
    };
    forms.forEach(function (element) {
        postData(element);
    })
    async function postData(form) {

        form.addEventListener('submit', (event) => {
            let error = 0;
            event.preventDefault();

            error = formValidate();


            if (error == 0) {
                const statusMessage = document.createElement('img');

                statusMessage.src = message.loading;
                statusMessage.style.cssText = `  
                    display : block;
                    margin : 0 auto;
                    padding:20px 0px;

                `;

                form.insertAdjacentElement('afterend', statusMessage);

                setTimeout(() => {
                    statusMessage.remove();
                    form.reset();
                    showThanksModal(message.succsess)
                }, 1000);


                document.querySelector('.signup-form').classList.remove('error')
                document.querySelectorAll('.filed_err').forEach(function (ell, index) {
                    ell.classList.add('hide');
                    ell.classList.remove('show');

                });
            } else {
                document.querySelector('.signup-form').classList.add('error')
                document.querySelectorAll('.filed_err').forEach(function (ell, index) {
                    ell.classList.add('show');
                    ell.classList.remove('hide');
                    ell.style.cssText = `  
                        color: red;
                        padding-bottom: 10px;
                    `;
                });
            }

        });
    }
    function formValidate() {
        let error = 0;
        const formReq = document.querySelectorAll('.__req');

        formReq.forEach(function (input, index) {

            if (input.classList.contains('email')) {

                if (input.value == '') {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('pw')) {
                if (input.value == '') {
                    formAddError(input);
                    error++;
                }
            }
            if (error == 0) {
                formRemoveError(input);
            }
        });
        return error;
    }
    function formAddError(input) {
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
    }


    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.signup-form');
        prevModalDialog.classList.add('hide');
        prevModalDialog.classList.remove('show');
        const ThanksModal = document.createElement('form');
        ThanksModal.classList.add('signup-form');
        ThanksModal.innerHTML = `
            <div class="modal__content">
            
                <div class="modal__image"> <img src="./img/Frame.png" alt=""></div>
                <div class="modal__title">${message}</div>
                <div  class="modal__text">Thank you, we have received your application and will contact you soon!</div>
                <div class="modal__button">Super!</div>
            </div>
 `;
        document.querySelector('.overlay-content').append(ThanksModal);
        setTimeout(() => {
            ThanksModal.remove();
            prevModalDialog.classList.remove('hide');
            // prevModalDialog.classList.add('hide');
            document.body.style.overflow = '';
            modal.classList.add('hide');
            modal.classList.remove('show');
        }, 900000);


    };

}
