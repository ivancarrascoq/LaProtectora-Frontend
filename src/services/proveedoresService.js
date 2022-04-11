const suppliers = [
  {
    id: 1,
    nombre: "Copec",
    rut: "70100200-8",
  },
  {
    id: 2,
    nombre: "Lider",
    rut: "76272306-4",
  },
  {
    id: 12,
    nombre: "Elba De Las Mercedes Arias Pino",
    rut: "6172079-0",
  },
  {
    id: 13,
    nombre: "Marco Antonio Osorio Opazo",
    rut: "10017863-k",
  },
  {
    id: 14,
    nombre: "Jacqueline Del Rosario Ortuzar Maulen",
    rut: "10021021-5",
  },
  {
    id: 15,
    nombre: "Juan Vital Guerero Escobar",
    rut: "10029509-1",
  },
  {
    id: 16,
    nombre: "Hiroo Menghraj Datwani",
    rut: "10098451-2",
  },
  {
    id: 17,
    nombre: "Marta Aedo Vasquez",
    rut: "10147785-1",
  },
  {
    id: 18,
    nombre: "Juan Francisco Parra Rojas",
    rut: "10185781-6",
  },
  {
    id: 19,
    nombre: "Adan Benito Perez Riquelme",
    rut: "10193691-0",
  },
  {
    id: 20,
    nombre: "Alvaro Rodrigo Padilla Lemus",
    rut: "10199650-6",
  },
  {
    id: 21,
    nombre: "Ingrid Guajardo Gonzalez",
    rut: "10243411-0",
  },
  {
    id: 22,
    nombre: "Elvira Aguirre Villablanca",
    rut: "10299073-0",
  },
  {
    id: 23,
    nombre: "Manuel Benito Palma Astudillo",
    rut: "10316333-1",
  },
  {
    id: 24,
    nombre: "Dario Alejandro Gaete Lizama",
    rut: "10342352-k",
  },
  {
    id: 25,
    nombre: "Jose Roberto Rojas Lagos",
    rut: "10371056-1",
  },
  {
    id: 26,
    nombre: "Claudio Silva Pavez",
    rut: "10396024-K",
  },
  {
    id: 27,
    nombre: "Jorge Antonio Sazo Cea",
    rut: "10456332-5",
  },
  {
    id: 28,
    nombre: "Jeannette Gonzalez Gonzalez",
    rut: "10464501-1",
  },
  {
    id: 29,
    nombre: "Sandra Gilia Alcantara Leonicio",
    rut: "10474155-k",
  },
];

export function getSuppliers() {
    return suppliers;
};

export function getSupplier(id) {
    // return suppliers.filter( m => m.id === id );
    return suppliers.find(m => m.id === id);
    // .filter( m => m.id === id );
};

// export function getTotalSuppliers(id) {
//     return suppliers.length;
// };

// export function saveSupplier() {
//     return suppliers;
// };

// export function deleteSupplier() {
//     return suppliers;
// };
