import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Snapshotpolicies extends BaseSchema {
  protected tableName = 'snapshot_policies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('policy_name').notNullable()
      table.string('project_directory').nullable()
      table.string('schedule_type').notNullable()
      table.string('time_zone').notNullable()
      table.string('snap_shot_time').notNullable()
      table.string('snap_shot_days').notNullable()
      table.string('snap_shot_delete_interval').notNullable()
      table.boolean('enable_locked_snap_shots').notNullable()
      table.boolean('enable_policy').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
