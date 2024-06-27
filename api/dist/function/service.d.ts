/**
 * Função para verificar se um número é CPF ou CNPJ e validar o CPF.
 * @param input O número de CPF ou CNPJ a ser verificado.
 * @returns 'CPF' se o número é um CPF válido, 'CNPJ' se é um CNPJ, ou 'Invalid' se é inválido.
 */
export declare function validarCPF(input: string): false | "CPF" | "CNPJ";
