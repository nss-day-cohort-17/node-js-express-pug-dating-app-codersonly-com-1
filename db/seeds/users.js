
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {"name":"Evelyn Weaver","email":"eweaver0@cocolog-nifty.com","password":"EsaX9WjAW1","gender":"Female","sexyLanguage":"NodeJS","location":"Kansas","macOrPc":"PC","birthday":"07/23/1991","aboutUser":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."},
        {"name":"Joyce Meyer","email":"jmeyer1@mozilla.com","password":"qQAbYE4gr5","gender":"Female","sexyLanguage":"NodeJS","location":"California","macOrPc":"PC","birthday":"05/28/1984","aboutUser":"Sed ante. Vivamus tortor. Duis mattis egestas metus."},
        {"name":"Joseph Gardner","email":"jgardner2@shareasale.com","password":"9NvuqFk","gender":"Male","sexyLanguage":"AngularJS","location":"New York","macOrPc":"Mac","birthday":"06/10/1993","aboutUser":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."},
        {"name":"Donna Moore","email":"dmoore3@liveinternet.ru","password":"0k0EgCKci","gender":"Female","sexyLanguage":"JQuery","location":"Texas","macOrPc":"Mac","birthday":"03/04/1986","aboutUser":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."},
        {"name":"Jonathan Burton","email":"jburton4@shareasale.com","password":"HOMMfigJmrfZ","gender":"Male","sexyLanguage":"C+","location":"Arizona","macOrPc":"Mac","birthday":"05/12/1985","aboutUser":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."},
        {"name":"Carl Lee","email":"clee5@google.nl","password":"Umaaxfa4V","gender":"Male","sexyLanguage":"Python","location":"Missouri","macOrPc":"Mac","birthday":"08/29/1993","aboutUser":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."},
        {"name":"Pamela Mendoza","email":"pmendoza6@yellowpages.com","password":"OFuhYHK0cp","gender":"Female","sexyLanguage":"C+","location":"North Carolina","macOrPc":"PC","birthday":"11/10/1995","aboutUser":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."},
        {"name":"Christine Ruiz","email":"cruiz7@ted.com","password":"ynHelhwN2T6","gender":"Female","sexyLanguage":"C+","location":"Texas","macOrPc":"Mac","birthday":"12/17/1991","aboutUser":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."},
        {"name":"Brian Ruiz","email":"bruiz8@cdbaby.com","password":"WN0zBnptSv9","gender":"Male","sexyLanguage":"Python","location":"Hawaii","macOrPc":"PC","birthday":"03/29/1994","aboutUser":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."},
        {"name":"Paul Hunter","email":"phunter9@merriam-webster.com","password":"uXmdjd0jEM","gender":"Male","sexyLanguage":"AngularJS","location":"Texas","macOrPc":"PC","birthday":"09/19/1987","aboutUser":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."}
      ]);
    });
};
