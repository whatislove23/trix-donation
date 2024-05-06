import { useState } from "react";
import AuthTemplate from "../../components/AuthTemplate";
import Title from "../../components/Title";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import authValidate from "../../functions/authValidate";
import { toast } from "react-toastify";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  const onSubmit = () => {
    let errors = authValidate(undefined, password, email, true);
    for (let error in errors) {
      toast.error(errors[error]);
    }
  };
  return (
    <AuthTemplate>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center gap-5"
      >
        <Title>Авторизація</Title>
        <Input
          placeholder={"E-mail"}
          type={"email"}
          onChange={onEmailChange}
          value={email}
        />
        <div className="flex w-full flex-col gap-1">
          <Input
            placeholder={"Пароль"}
            type={"password"}
            value={password}
            onChange={onPasswordChange}
          />
          <Link
            to="/password-reset"
            className="self-end text-sm font-semibold text-text-200"
          >
            Забули пароль?
          </Link>
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <Button className={"w-full"} onClick={onSubmit}>
            Авторизуватись
          </Button>
          <div className=" flex gap-1">
            <p className="font-semibold text-text-200 ">Не маєте аккаунт?</p>{" "}
            <Link to="/register" className="font-semibold text-primary-200">
              Зарєєструватись
            </Link>
          </div>
        </div>
      </form>
    </AuthTemplate>
  );
}
