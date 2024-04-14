import React, {useState} from "react";
import Input from "../../components/input";
import Button from "../../components/Button";
import * as S from "./styles"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email| !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os email não são iguais")
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res)
      return;
    }

    navigate("/")
  }


  return(
    <S.Container>
      <h1>Cadastro</h1>
      <S.Content>
        <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
        type="email"
        placeholder="Confirme o seu Email"
        value={emailConf}
        onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
        type="senha"
        placeholder="Senha"
        value={senha}
        onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <h4>{error}</h4>
        <Button Text="Inscrever-se" onClick={handleSignup}></Button>
        <h3>Ja tem um cadastro? <Link to="/">Entrar</Link></h3>
      </S.Content>
    </S.Container>
  );
};

export default Signup