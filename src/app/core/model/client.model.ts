export type ClientStatus = "Ativo" | "Inativo";

export interface Client {
    id?: number;
    name: string;
    cnpj: string;
    status: ClientStatus;
}
