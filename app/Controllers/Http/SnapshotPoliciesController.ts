import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SnapshotPolicy from "App/Models/SnapshotPolicy"

/**
 * SnapshotPoliciesController
 *
 * Handles CRUD operations for SnapshotPolicy model.
 */
export default class SnapshotPoliciesController {

  /**
   * Returns a list of all snapshot policies.
   *
   * @returns {Promise<SnapshotPolicy[]>} A list of snapshot policies.
   */
    public async index () {
        const policies = await SnapshotPolicy.all()
        return policies
    }

    /**
   * Returns a single snapshot policy by ID.
   *
   * @param {object} params - Request parameters.
   * @param {number} params.id - ID of the snapshot policy to retrieve.
   * @returns {Promise<SnapshotPolicy>} The snapshot policy with the specified ID.
   */
    public async show ({ params }) {
        const policies = await SnapshotPolicy.find(params.id)
        return policies
    }

      /**
   * Updates a snapshot policy.
   *
   * @param {object} params - Request parameters.
   * @param {number} params.id - ID of the snapshot policy to update.
   * @param {object} request - Request object.
   * @param {object} response - Response object.
   * @returns {Promise<SnapshotPolicy>} The updated snapshot policy.
   *
   * @example
   * // Request body
   * {
   *   "projectDirectory": "/path/to/project",
   *   "scheduleType": "daily",
   *   "timeZone": "America/New_York",
   *   "snapShotTime": "12:00",
   *   "snapShotDays": ["monday", "tuesday"],
   *   "snapShotDeleteInterval": 30,
   *   "enableLockedSnapShots": true,
   *   "enablePolicy": true
   * }
   */
    public async update({ params, request, response }: HttpContextContract) {
        try {
          const id = params.id
          const data = request.only([
            'projectDirectory',
            'scheduleType',
            'timeZone',
            'snapShotTime',
            'snapShotDays',
            'snapShotDeleteInterval',
            'enableLockedSnapShots',
            'enablePolicy'
          ])

          const updatedPolicy = await SnapshotPolicy.updatePolicy(id, data)
          return response.json(updatedPolicy)
        } catch (error) {
          return response.status(404).json({ message: error.message })
        }
      }
}

