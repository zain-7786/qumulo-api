import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * SnapshotPolicy model
 */
export default class SnapshotPolicy extends BaseModel {
  /**
   * Primary key
   */
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'policy_name' })
  public policyName: string

  @column({ columnName: 'project_directory' })
  public projectDirectory: string

  @column({ columnName: 'schedule_type' })
  public scheduleType: string

  @column({ columnName: 'time_zone' })
  public timeZone: string

  @column({ columnName: 'snap_shot_time' })
  public snapShotTime: string

  @column({ columnName: 'snap_shot_days' })
  public snapShotDays: string

  @column({ columnName: 'snap_shot_delete_interval' })
  public snapShotDeleteInterval: string

  @column({ columnName: 'enable_locked_snap_shots' })
  public enableLockedSnapShots: boolean

  @column({ columnName: 'enable_policy' })
  public enablePolicy: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

   /**
   * Update a policy by ID
   * @param id Policy ID
   * @param data Partial policy data to update
   * @returns Updated policy
   */
  public static async updatePolicy(id: number, data: Partial<SnapshotPolicy>) {
    // Find the policy by ID
    const policy = await this.find(id)
    if (!policy) {
       // Throw an error if policy not found
      throw new Error('Policy not found')
    }
    // Merge the updated data into the policy
    policy.merge(data)
    // Save the updated policy
    await policy.save()
    // Return the updated policy
    return policy
  }
}
