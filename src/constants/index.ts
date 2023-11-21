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
    occupation: "Propietarios y Operadores",
    image:
      "https://static.wixstatic.com/media/7e3fa0_32d9346bea7446489a0d2298e0f0a94a~mv2.jpg/v1/crop/x_101,y_0,w_523,h_523/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_DSF0034_1995%25255B1%25255D_edited_edited_j.jpg",
    description:
      "Empezamos Headhunters en 1978 con un solo objetivo, ¡usted! Como equipo hemos trabajado juntos durante más de 41 años para construir Headhunters en un nombre familiar Pensacola.Whether usted nos está viendo para su cita regular, recortar para esa reunión importante, o vestirse para un evento extravagante, vamos a llegar hasta allí. Sea cual sea su estilo u ocasión, queremos marcar la diferencia.",
  },
  {
    name: "THERESA BAGGETT",
    occupation: "40 años de experiencia",
    image:
      "https://static.wixstatic.com/media/7e3fa0_de1a71e4135c4c21ac877b0989d5d317~mv2.jpg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/17-4-18-4610_edited.jpg",
    description:
      "Theresa ha estado con HeadHunter Hairstyling desde 1981. Ella es nativa de Pensacola y ha sido estilista y cosmetóloga por 40 años. Una fabulosa Maestra Estilista con múltiples talentos, a ella le encanta hacer peinados. ¡Ya se trate de color, cortes (largos o cortos) y todo lo demás! Acércate y llama a Theresa para una consulta. No importa lo que necesites, ella te tiene cubierto.",
  },
  {
    name: "KATHY MORGAN",
    occupation: "20 años de experiencia",
    image:
      "https://static.wixstatic.com/media/7e3fa0_7182999cf0804e96b795b015c9885b22~mv2.jpg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/13-4-18-2148_edited.jpg",
    description:
      "Kathy se unió a nuestro personal como un paquete maravilloso con Maurene. Como Master Stylist, ella exuda un estilo de vida libre de playa que ha hecho crecer su negocio a la vasta clientela que tiene ahora. Puede llamar a Kathy directamente para reservar sus citas al 850-516-0135.",
  },
  {
    name: "KRISSY KAYLOR",
    occupation: "12 años de experiencia",
    image:
      "https://static.wixstatic.com/media/7e3fa0_009b8a57d6ed491e81a8c0a1aabb360e~mv2.jpg/v1/fill/w_320,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11-4-18-5528_edited.jpg",
    description:
      "Krissy es originaria de Manhattan, KS. Se graduó George Stone como especialista en color y ha estado haciendo el pelo durante 12 años. Desde entonces se ha mantenido al día sobre las últimas tendencias y estilos tomando numerosas clases y siguiendo todas las celebridades más calientes. Krissy realmente le gusta trabajar con la gente y asegurarse de que todas sus necesidades de cabello se cumplen. Ella va más allá por su clientela y hace un punto para estar disponible las noches y fines de semana para satisfacer sus necesidades. Usted puede llamar a Krissy directamente para reservar sus citas en 850-261-1869.",
  },
  {
    name: "TONY RIHA",
    occupation: "57 años de experiencia",
    image:
      "https://static.wixstatic.com/media/7e3fa0_ff87b45489ef460ebbf292633cb95684~mv2.png/v1/fill/w_320,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_3685_edited.png",
    description:
      "Tony se unió recientemente a la familia Headhunter. Después de 57 años como propietario de Esquire Barbership, Toni cerró sus puertas y se trasladó a Headhunter Hairstyling. Toni trabaja lunes, jueves y viernes. Da la bienvenida a los clientes sin cita previa, pero también puede llamarle directamente para reservar sus citas al 850-607-1715.",
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
    get link() {
      return `mailto:${this.value}`;
    },
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
