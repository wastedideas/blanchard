var selector = document.querySelector(".contacts__form__input_tel");
  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  colorWrong: 'red',
  messages: {
    name: {
      required: 'Укажите ваше имя',
      minLength: 'Длина должна быть больше 2 символов',
      maxLength: 'Длина должна быть не более 30 символов',
    },
    tel: {
      required: 'Недопустимый формат',
      },
  },
})
