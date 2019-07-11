const esConnection = require('./connection')

async function insertStuffs () {
  try {
    let bulkOps = [];

    // Clear previous ES index
    await esConnection.resetIndex();

    let stuffs = [
      {
        title: 'Caixa New Turin',
        place: 'Aéreo quarto',
        location: 'último andar',
        text: 'caixa de sapatos new turin preta e branca'
      },
      {
        title: 's3 mini',
        place: 'Caixa New turin',
        location: 'dentro',
        text: 's3 mini celular samsumg'
      },
      {
        title: 'conversor de energia',
        place: 'Caixa New turin',
        location: 'dentro',
        text: 'conversor de energia de 110v e 220v'
      }
    ];

    for (let stuff of stuffs) {

      bulkOps.push({ index: { _index: esConnection.index, _type: esConnection.type } })

      bulkOps.push({
        stuff.title,
        stuff.place,
        stuff.location,
        stuff.text
      });
    }

    await esConnection.client.bulk({ body: bulkOps })

  } catch (err) {
    console.error(err)
  }
}

insertStuffs()
