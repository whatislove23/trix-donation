import { toast } from 'react-toastify';
const authValidate = (fullName, password, email, flag = false) => {
  const errors = {};
  if (fullName !== undefined) {
    if (!fullName) {
      errors.fullName = 'ПІБ обовʼязкове';
    } else if (!/^(\p{Lu}\p{L}*\s+){2}\p{Lu}\p{L}*$/u.test(fullName.trim())) {
      errors.fullName = "ПІБ має бути у форматі Прізвище Ім'я По Батькові";
    }
  }
  if (password !== undefined) {
    if (!password) {
      errors.password = 'Пароль обовʼязковий';
    } else if (password.length < 6) {
      if (!flag) {
        errors.password = 'Пароль повинен містити щонайменше 6 символів';
      }
    } else if (!/\d/.test(password)) {
      if (!flag) {
        errors.password = 'Пароль повинен містити цифри';
      }
    } else if (!/[A-Z]/.test(password)) {
      if (!flag) {
        errors.password = 'Пароль повинен містити великі літери';
      }
    }
  }

  if (email !== undefined) {
    if (!email) {
      errors.email = 'Пошта обовʼязкова';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Не валідна пошта';
    }
  }
  if (Object.keys(errors).length) {
    for (let error in errors) {
      toast.error(errors[error]);
    }
    return Object.keys(errors).length == 0;
  }
};
export default authValidate;
