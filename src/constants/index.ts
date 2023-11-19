import type { CardServicePriceInfoProps } from "../types/card";
import type { StoreInformation, ContactField } from "../types/store";
import type { Stylist } from "../types/stylists";

export const CardServicePriceInfo: CardServicePriceInfoProps[] = [
  {
    title: "Corte",
    image: "img/services/cut.png",
    prices: [
      {
        title: "Hombre",
        price: 180,
      },
      {
        title: "Mujer",
        price: 250,
      },
      {
        title: "Niños",
        price: 150,
      },
    ],
    orientation: "left",
  },
  {
    title: "Tintes",
    image: "img/services/color.png",
    prices: [
      {
        title: "Tinte (Sin Decoloración)",
        price: 850,
      },
      {
        title: "Retoque Tinte",
        price: 500,
      },
      {
        title: "Efecto Alta Decoloración",
        price: 2200,
      },
    ],
    orientation: "right",
  },
  {
    title: "Peinado",
    image: "img/services/hair_style.png",
    prices: [
      {
        title: "Cabello Corto",
        price: 570,
      },
      {
        title: "Cabello Mediano",
        price: 720,
      },
      {
        title: "Cabello Largo",
        price: 830,
      },
    ],
    orientation: "left",
  },
  {
    title: "Cuidado del cabello",
    image: "img/services/hair_care.png",
    prices: [
      {
        title: "Tratamiento capilar",
        price: 2300,
      },
      {
        title: "Planchado permanente",
        price: 600,
      },
      {
        title: "Hidratación",
        price: 900,
      },
    ],
    orientation: "right",
  },
];

export const STYLISTS: Stylist[] = [
  {
    name: "ELLEN AND JEFF HUNT",
    occupation: "Owners and Operators",
    image:
      "https://static.wixstatic.com/media/7e3fa0_32d9346bea7446489a0d2298e0f0a94a~mv2.jpg/v1/crop/x_101,y_0,w_523,h_523/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_DSF0034_1995%25255B1%25255D_edited_edited_j.jpg",
    description:
      "We started Headhunters in 1978 with a single target, you! As a team we have worked together for over 41 years to build Headhunters into a Pensacola household name.Whether you're seeing us for your regular appointment, getting trimmed up for that important meeting, or getting dressed up for an extravagant event, we will get you there. Whatever your style or occasion, we want to be the difference.",
  },
  {
    name: "THERESA BAGGETT",
    occupation: "40 Years Experience",
    image:
      "https://static.wixstatic.com/media/7e3fa0_de1a71e4135c4c21ac877b0989d5d317~mv2.jpg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/17-4-18-4610_edited.jpg",
    description:
      "Theresa has been with HeadHunter Hairstyling since 1981. She's a Pensacola native and has been a stylist and cosmetologist for 40 years now. A fabulous Master Stylist with multiple talents, she loves doing hair. Whether it's color, cuts (long or short) and everything in between! Reach out and give Theresa a call for a consultation. No matter what you need, she's got you covered.",
  },
  {
    name: "KRISSY KAYLOR",
    occupation: "12 Years Experience",
    image:
      "https://static.wixstatic.com/media/7e3fa0_009b8a57d6ed491e81a8c0a1aabb360e~mv2.jpg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11-4-18-5528_edited.jpg",
    description:
      "Krissy is originally from Manhattan, KS. She graduated George Stone as a color specialist and has been doing hair for 12 years now. Since then she has stayed current on the latest trends and styles by taking numerous classes and following all of the hottest celebrities. Krissy really enjoys working with people and making sure all of their hair needs are met. She will go above and beyond for her clientele and makes it a point to be available nights and weekends to fit their needs. You can call Krissy directly to book your appointments at 850-261-1869.",
  },
  {
    name: "KATHY MORGAN",
    occupation: "20 Years Experience",
    image:
      "https://static.wixstatic.com/media/7e3fa0_7182999cf0804e96b795b015c9885b22~mv2.jpg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/13-4-18-2148_edited.jpg",
    description:
      "Kathy joined our staff as a wonderful package with Maurene. As a Master Stylist, she exudes a beachy free lifestyle that has grown her business to the vast clientele she has now. You can call Kathy directly to book your appointments at 850-516-0135.",
  },
  {
    name: "TONY RIHA",
    occupation: "57 Years Experience",
    image:
      "https://static.wixstatic.com/media/7e3fa0_ff87b45489ef460ebbf292633cb95684~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_3685_edited.png",
    description:
      "Tony recently joined the Headhunter family. After 57 years of owning Esquire Barbership, Toni closed his doors and moved to Headhunter Hairstyling. Toni works Monday, Thursday, and Friday. He welcomes walk-in clients but you can also call him directly to book your appointments at 850-607-1715.",
  },
];

export const CARROUSEL_IMAGES = [
  "img/carrousel/img_1.webp",
  "img/carrousel/img_2.webp",
];

export const STORE_INFORMATION: StoreInformation[] = [
  {
    field: "Teléfono",
    value: "850-433-3308",
    type: "text",
  },
  {
    field: "Dirección",
    value: "205 S Baylen St. Pensacola, FL 32502",
    type: "text",
  },
  {
    field: "Correo electrónico",
    value: "info@headhunterhairstyling.com",
    type: "link",
  },
];

export const CONTACT_FIELDS: ContactField[] = [
  {
    keyname: "nombre",
    field: "Nombre",
    type: "text",
    required: true,
  },
  {
    keyname: "email",
    field: "Correo Electrónico",
    type: "text",
    required: true,
  },
  {
    keyname: "telefono",
    field: "Telefóno",
    type: "text",
    required: true,
  },
  {
    keyname: "servicio",
    field: "Servicio",
    type: "options",
    required: true,
    options: CardServicePriceInfo.map((x) => x.title),
  },
  {
    keyname: "stylist",
    field: "Seleccionar estilista",
    type: "options",
    required: true,
    options: STYLISTS.map((x) => x.name),
  },
  {
    keyname: "date",
    field: "Seleccionar fecha",
    type: "calendar",
    required: true,
  },
  {
    keyname: "horario",
    field: "Seleccionar horario",
    type: "options",
    required: true,
    options: [
      "8:00 A.M.",
      "9:00 A.M.",
      "10:00 A.M.",
      "11:00 A.M.",
      "12:00 P.M.",
      "1:00 P.M.",
      "2:00 P.M.",
      "3:00 P.M.",
      "4:00 P.M.",
      "5:00 P.M.",
      "6:00 P.M.",
      "7:00 P.M.",
    ],
  },
  {
    keyname: "mensaje",
    field: "Mensaje",
    type: "text-multiple",
    required: true,
  },
];

interface displayFields {
  display: string;
  getValue: (obj: ContactField & { value: string }) => string;
}

export const DISPLAY_FIELDS: Record<string, displayFields> = {
  nombre: {
    display: "Nombre",
    getValue: (obj) => obj.value,
  },
  email: {
    display: "Email",
    getValue: (obj) => obj.value,
  },
  telefono: {
    display: "Teléfono",
    getValue: (obj) => obj.value,
  },
  servicio: {
    display: "Servicio",
    getValue: (obj) => obj.options?.[Number(obj.value)]!,
  },
  stylist: {
    display: "Estilista",
    getValue: (obj) => obj.options?.[Number(obj.value)]!,
  },
  date: {
    display: "Fecha",
    getValue: (obj) => {
      const dateFormat = Intl.DateTimeFormat("es-MX", {
        dateStyle: "medium",
      });
      return dateFormat.format(obj.value as unknown as Date);
    },
  },
  horario: {
    display: "Horario",
    getValue: (obj) => obj.options?.[Number(obj.value)]!,
  },
  mensaje: {
    display: "Mensaje",
    getValue: (obj) => obj.value,
  },
};
