import * as Yup from "yup";

export const contactValidation = Yup.object({
    subject: Yup.string().min(2).required("Please enter the Subject"),
    message: Yup.string().min(2).required("Please enter the Message"),
});

export const loginValidation = Yup.object({
    username: Yup.string().min(2).required("Please enter the Username"),
    password: Yup.string().min(2).required("Please enter the Password"),
});

export const registerValidation = Yup.object({
    email: Yup.string().email().required("Please enter the Email"),
    name: Yup.string().min(2).required("Please enter the Name"),
    username: Yup.string().min(2).required("Please enter the Username"),
    password: Yup.string()
        .min(6, "Your password must be at least 6 characters long")
        .required("Please enter the Password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
            "Please enter atleast 1 uppercase,1 lowercase and 1 digit."
        ),
    confirm_password: Yup.string()
        .required("Please enter the Password again")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});