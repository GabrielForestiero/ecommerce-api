require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Aurora Fang",
        price: 1400,
        imageURL: "/products/aurora.svg",
        description: "Energía cítrica intensa ⚡",
        longDescription: `
Despertá tu energía interior.

Aurora Fang combina la intensidad del lemon zest con un toque ácido y refrescante de nebula lime, creando una explosión cítrica que impacta desde el primer sorbo.

Inspirada en la fuerza salvaje del tigre y la energía del cosmos, esta bebida está pensada para quienes buscan potencia, enfoque y actitud sin perder frescura.

Ideal para entrenar, estudiar, trabajar o encarar la noche con todo.
        `.trim(),
      },
      {
        name: "Quantum Leap",
        price: 1450,
        imageURL: "/products/quantum.svg",
        description: "Energía futurista para dar el salto ⚡",
        longDescription: `
Un salto directo al futuro de la energía.

Quantum Leap fusiona la dulzura intensa de Chronos Berry con el toque ácido y vibrante de Hyperspace Lime, logrando un equilibrio preciso entre frescura y potencia.

Inspirada en la velocidad, la tecnología y la precisión absoluta, esta bebida está pensada para quienes necesitan enfoque, reacción inmediata y energía limpia, sin interrupciones.

Ideal para momentos donde cada segundo cuenta: trabajo de alta concentración, gaming competitivo o sesiones creativas intensas.
  `.trim(),
      },

      {
        name: "Titanic Smash",
        price: 1500,
        imageURL: "/products/titanicsmash.svg",
        description: "Impacto de energía brutal 💥",
        longDescription: `
Fuerza descomunal en cada sorbo.

Titanic Smash está pensada para quienes buscan un golpe de energía intenso y directo, ideal para momentos de máxima exigencia física o mental.

Su perfil potente y su identidad agresiva la convierten en la opción perfecta para entrenamientos extremos, jornadas largas o cuando necesitás rendir al límite.

No es sutil. Es impacto puro.
  `.trim(),
      },

      {
        name: "Cosmic Harvest",
        price: 1350,
        imageURL: "/products/cosmicharvest.svg",
        description: "Energía equilibrada de origen cósmico ✨",
        longDescription: `
Energía que fluye en perfecta armonía.

Cosmic Harvest combina notas frutales suaves con un perfil refrescante y equilibrado, ofreciendo un impulso energético estable y agradable desde el primer sorbo.

Inspirada en la abundancia del universo y el equilibrio natural, esta bebida está pensada para quienes buscan energía constante sin excesos ni picos bruscos.

Ideal para el día a día, jornadas laborales, estudio o momentos creativos donde necesitás claridad y enfoque sostenido.
  `.trim(),
      },
      {
        name: "Glacier Crush",
        price: 1300,
        imageURL: "/products/glaciarcrush.svg",
        description: "Frescura extrema que despierta ❄️",
        longDescription: `
Un golpe de energía tan frío como poderoso.

Glacier Crush ofrece una experiencia ultra refrescante, pensada para despejar la mente y activar el cuerpo con una sensación limpia e intensa desde el primer sorbo.

Inspirada en la pureza de los glaciares y el impacto del frío absoluto, esta bebida es ideal para combatir el cansancio, el calor o la fatiga mental sin resultar pesada.

Perfecta para días largos, climas cálidos o cuando necesitás energía clara y directa.
  `.trim(),
      },

      {
        name: "Tempest Fury",
        price: 1450,
        imageURL: "/products/tempestfury.svg",
        description: "La furia de la tormenta ⚡",
        longDescription: `
Energía salvaje liberada sin control.

Tempest Fury combina intensidad pura con un perfil eléctrico y vibrante, diseñada para desatar un impulso inmediato cuando necesitás ir al máximo.

Inspirada en la fuerza imparable de las tormentas, esta bebida está pensada para momentos de alta exigencia, donde la energía no puede fallar y el ritmo no se negocia.

Ideal para entrenamientos extremos, competencias, gaming intenso o jornadas que exigen darlo todo.
  `.trim(),
      },
      {
        name: "Celestial Charge",
        price: 1400,
        imageURL: "/products/celestialcharge.svg",
        description: "Energía elevada y enfoque total ✨",
        longDescription: `
Un impulso que viene desde lo más alto.

Celestial Charge ofrece una experiencia energética limpia y equilibrada, pensada para elevar el enfoque y la claridad mental sin saturar los sentidos.

Inspirada en la calma del cielo y la potencia del cosmos, esta bebida es ideal para quienes buscan rendimiento sostenido, concentración y una sensación de energía más liviana y refinada.

Perfecta para trabajo creativo, estudio profundo o momentos donde necesitás claridad y control.
  `.trim(),
      },

      {
        name: "Arcane Blast",
        price: 1450,
        imageURL: "/products/arcaneblast.svg",
        description: "Explosión de energía arcana 🔮",
        longDescription: `
Poder antiguo liberado en forma de energía.

Arcane Blast combina intensidad profunda con un perfil envolvente y potente, diseñada para quienes buscan un impulso fuerte y diferente, con carácter y misterio.

Inspirada en fuerzas arcanas y energía oculta, esta bebida ofrece un golpe energético decidido que despierta cuerpo y mente, ideal para momentos donde necesitás romper límites y mantenerte al máximo.

Perfecta para entrenamientos intensos, sesiones nocturnas o cuando necesitás una energía más oscura y contundente.
  `.trim(),
      },
    ],
  });

  console.log("✅ Productos seed creados");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
