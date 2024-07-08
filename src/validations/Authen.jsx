import { object, string, ref } from "yup";

const Authen = object().shape({
  email: string()
    .required("El correo electrónico es obligatorio")
    .email("Correo electrónico no válido")
    .trim("El correo electrónico no debe tener espacios al inicio o al final"),
  password: string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(/[a-zA-Z]/, "La contraseña debe contener al menos una letra")
    .trim("La contraseña no debe tener espacios al inicio o al final"),
  confirmPassword: string()
    .required("La confirmación de la contraseña es obligatoria")
    .oneOf([ref("password"), null], "Las contraseñas deben coincidir")
    .trim("La confirmación de la contraseña no debe tener espacios al inicio o al final"),
});

export default Authen;
