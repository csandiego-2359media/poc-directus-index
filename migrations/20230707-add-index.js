export async function up(knex) {
    await knex.schema.alterTable('My_Table', function (table) {
        table.index(['partition_key', 'sort_key'], 'idx_partition_key_sort_key');
    });
}

export async function down(knex) {
    await knex.schema.alterTable('My_Table', function (table) {
        table.dropIndex(['partition_key', 'sort_key'], 'idx_partition_key_sort_key');
    });
}