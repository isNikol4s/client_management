function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11) {
    return false;
  }
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let primeiroDigito = 11 - soma % 11;
  if (primeiroDigito > 9) {
    primeiroDigito = 0;
  }
  if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
    return false;
  }
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let segundoDigito = 11 - soma % 11;
  if (segundoDigito > 9) {
    segundoDigito = 0;
  }
  if (parseInt(cpf.charAt(10)) !== segundoDigito) {
    return false;
  }
  return true;
}
function validarCNPJ(cnpj) {
  cnpj = cnpj.replace(/\D/g, "");
  if (cnpj.length !== 14) {
    return false;
  }
  let soma = 0;
  let peso = 2;
  for (let i = 11; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  let primeiroDigito = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (parseInt(cnpj.charAt(12)) !== primeiroDigito) {
    return false;
  }
  soma = 0;
  peso = 2;
  for (let i = 12; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = peso === 9 ? 2 : peso + 1;
  }
  let segundoDigito = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (parseInt(cnpj.charAt(13)) !== segundoDigito) {
    return false;
  }
  return true;
}
export {
  validarCNPJ,
  validarCPF
};
