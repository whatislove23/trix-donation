import { toast } from "react-toastify";
import authValidate from "../../functions/authValidate";
import { useState } from "react";
import AuthTemplate from "../../components/AuthTemplate";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function NewPassword() {
  const [password, setPass] = useState("");

  const onPasswordChange = (e) => setPass(e.target.value);

  const onSubmit = () => {
    let errors = authValidate(undefined, password, undefined, false);
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
        <Title>Новий пароль</Title>
        <Input
          placeholder={"Новий пароль"}
          type={"password"}
          onChange={onPasswordChange}
          value={password}
        />

        <div className="flex w-full flex-col items-center gap-4">
          <Button className="w-full" onClick={onSubmit}>
            Оновити
          </Button>
          <div className=" flex gap-1">
            <p className="font-semibold text-text-200 ">Згадали пароль?</p>{" "}
            <Link to="/auth" className="font-semibold text-primary-200">
              Авторизуватись
            </Link>
          </div>
        </div>
      </form>
    </AuthTemplate>
  );
}
