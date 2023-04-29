const ContactBook = require('../models/contactBook.js');

function seedData(app) {
    app.get('/seedContactBook', async function(req, res) {
        await ContactBook.deleteMany({});

        let contacts = [
          {
              name: "naresh",
              phones: [
                {
                    type: "home",
                    number: 123
                },
                {
                    type: "office",
                    number: 456
                }
              ],
              city: "bhavnagar"
          },

          {
              name: "suresh",
              phones: [
                {
                    type: "home",
                    number: 111
                },
                {
                    type: "office",
                    number: 222
                }
              ],
              city: "surat"
          }
        ];

        await ContactBook.create(contacts, function(err, results) {
            if(err) throw err;
            res.send(results);
        })
    })
}

module.exports = seedData;
