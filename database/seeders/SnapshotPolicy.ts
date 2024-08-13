import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SnapshotPolicy from 'App/Models/SnapshotPolicy'

export default class SnapshotPolicySeeder extends BaseSeeder {
  public async run () {
    await SnapshotPolicy.create({
      policyName: 'qumulo policy',
      projectDirectory: '',
      scheduleType: 'Daily',
      timeZone: 'America/Los Angeles',
      snapShotTime: '11:45',
      snapShotDays: 'Every Day',
      snapShotDeleteInterval: 'Never',
      enableLockedSnapShots: false,
      enablePolicy: true
    })
  }
}
