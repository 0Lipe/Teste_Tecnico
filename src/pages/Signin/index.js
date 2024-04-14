import React, {useState} from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import * as S from "./styled"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };
 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("")

  return (
    <S.Container>
      <h1>Login</h1>
      <S.Content>
        <Input type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]} />
        <Input type="senha"
        placeholder="Senha"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]} />
        <Button Text="Entrar" onClick={handleLogin}/>
        <h4>{error}</h4>
        <h3>
          Não tem um cadastro?
          <Link to="/signup">&nbsp;Registrar</Link>
        </h3>
      </S.Content>
    </S.Container>
  );
};

export default Signin