function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11) {
    return { valid: false, message: "CPF inv\xE1lido: deve conter 11 d\xEDgitos" };
  }
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let primeiroDigito = 11 - soma % 11;
  if (primeiroDigito > 9)
    primeiroDigito = 0;
  if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
    return { valid: false, message: "CPF inv\xE1lido: primeiro d\xEDgito verificador n\xE3o corresponde" };
  }
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let segundoDigito = 11 - soma % 11;
  if (segundoDigito > 9)
    segundoDigito = 0;
  if (parseInt(cpf.charAt(10)) !== segundoDigito) {
    return { valid: false, message: "CPF inv\xE1lido: segundo d\xEDgito verificador n\xE3o corresponde" };
  }
  return { valid: true, message: "CPF V\xE1lido" };
}
export {
  validarCPF
};
