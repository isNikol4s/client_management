function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11) {
    return "CPF inv\xE1lido! Deve conter 11 d\xEDgitos";
  }
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  soma = 0;
  let segundoDigito = 11 - soma % 11;
  let primeiroDigito = 11 - soma % 11;
  if (primeiroDigito > 9)
    primeiroDigito = 0;
  if (parseInt(cpf.charAt(9)) !== primeiroDigito || parseInt(cpf.charAt(10)) !== segundoDigito) {
    return "CPF inv\xE1lido";
  }
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  if (segundoDigito > 9)
    segundoDigito = 0;
  return "CPF V\xE1lido";
}
export {
  validarCPF
};
