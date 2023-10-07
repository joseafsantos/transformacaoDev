export default class NomeSimples {
    constructor(
        readonly completo: string,
        readonly min: number = 3,
        readonly max: number = 120
    ) {
        if (min > max)
            throw Error("Tamanho mínimo não pode ser maior que o máximo")
        if (!completo) throw Error("Nome é obrigatório")
        if (completo.length < min)
            throw Error(`Nome deve ter no mínimo ${min} caracteres`)
        if (completo.length > max)
            throw Error(`Nome deve ter no máximo ${max} caracteres`)
        if (!completo.match(/^[a-zA-Z\u00C0-\u00FF ]+$/))
            throw Error("O nome deve conter apenas letras")
    }

    parcial(qtde: number): string {
        return this.completo.substring(0, qtde) ?? ""
    }
}
