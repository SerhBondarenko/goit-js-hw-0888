import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
input: document.querySelector('.feedback-form input'),
form: document.querySelector('.feedback-form'),
textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();
let formData ={};

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
};

function onTextareaInput(evt) {
   formData[evt.target.name] = evt.target.value
  const saveDataEl = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, saveDataEl);
};

function populateTextarea() {
   const savedMessage = localStorage.getItem(STORAGE_KEY);
   
    if (savedMessage) {
        const pasrsedSav = JSON.parse(savedMessage);
        let formData = {};
        formData = pasrsedSav;
        refs.textarea.value = pasrsedSav.message;
        refs.input.value = pasrsedSav.email;
      console.log(pasrsedSav)
    }
};

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Добавляем throttle
 */
/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */