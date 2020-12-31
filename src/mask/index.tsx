var BrM = require('br-masks');

export function maskCpf(value: string) {
    var cpf = value
    var maskedcpf = BrM.cpf(cpf)
    return maskedcpf
}

export function maskTelefone(value: string) {
    var phone9 = value;
    var maskedphone = BrM.phone(phone9);
    return maskedphone;
}