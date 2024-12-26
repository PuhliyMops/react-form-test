import * as yup from 'yup';

enum FieldErrors{
    Required='Поле является обязательным',
    Email='Введён некорректный email',
    TypeError='Значение не является числом'
}

export const schema = yup.object().shape({
    name: yup.string().required(FieldErrors.Required),
    age: yup.number().required(FieldErrors.Required).positive().integer().typeError(FieldErrors.TypeError),
    email: yup.string().required(FieldErrors.Required).email(FieldErrors.Email)

});

// check validity
