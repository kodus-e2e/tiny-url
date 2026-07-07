// Speed up expiry sweeps by indexing the link expiration column.
async function up(knex) {
  await knex.schema.alterTable("links", table => {
    table.index("expiration", "links_expiration_index");
  });
}

async function down(knex) {
  await knex.schema.alterTable("links", table => {
    table.dropIndex("expiration", "links_expiration_index");
  });
}

module.exports = { up, down };
