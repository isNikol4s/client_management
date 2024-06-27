/**
 * Verifica se um número é um CPF válido.
 * @param cpf O número de CPF a ser verificado.
 * @returns Uma mensagem indicando se o CPF é válido ou não.
 */
function validarCPF(cpf) {
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return 'CPF inválido: deve conter 11 dígitos e não ser uma sequência repetitiva';
    }
    
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    primeiroDigito = (primeiroDigito > 9) ? 0 : primeiroDigito;
    
    if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
        return 'CPF inválido: primeiro dígito verificador não corresponde';
    }
    
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let segundoDigito = 11 - (soma % 11);
    segundoDigito = (segundoDigito > 9) ? 0 : segundoDigito;
    
    if (parseInt(cpf.charAt(10)) !== segundoDigito) {
        return 'CPF inválido: segundo dígito verificador não corresponde';
    }
    
    return 'CPF válido';
}

/**
 * Verifica se um número é um CNPJ válido.
 * @param cnpj O número de CNPJ a ser verificado.
 * @returns Uma mensagem indicando se o CNPJ é válido ou não.
 */
function validarCNPJ(cnpj) {
    // Remove todos os caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');
    
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
        return 'CNPJ inválido: deve conter 14 dígitos e não ser uma sequência repetitiva';
    }
    
    // Calcula o primeiro dígito verificador
    let soma = 0;
    let peso = 2;
    for (let i = 11; i >= 0; i--) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso = (peso === 9) ? 2 : peso + 1;
    }
    let primeiroDigito = (soma % 11 < 2) ? 0 : 11 - (soma % 11);
    
    if (parseInt(cnpj.charAt(12)) !== primeiroDigito) {
        return 'CNPJ inválido: primeiro dígito verificador não corresponde';
    }
    
    // Calcula o segundo dígito verificador
    soma = 0;
    peso = 2;
    for (let i = 12; i >= 0; i--) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso = (peso === 9) ? 2 : peso + 1;
    }
    let segundoDigito = (soma % 11 < 2) ? 0 : 11 - (soma % 11);
    
    if (parseInt(cnpj.charAt(13)) !== segundoDigito) {
        return 'CNPJ inválido: segundo dígito verificador não corresponde';
    }
    
    return 'CNPJ válido';
}

validarCPF('117.954.036-08')