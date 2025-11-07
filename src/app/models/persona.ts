export class Persona {
  //PARA QUE REALICE EL BINDING AUTOMATICO
  //DE LAS PROPIEDADES DEBEN LLAMARSE COMO EL JSON
  constructor(
    public IdPersona: number,
    public Nombre: string,
    public Email: string,
    public Edad: number
  ) {}
}
