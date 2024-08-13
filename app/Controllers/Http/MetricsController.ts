import {getIOPSAndThroughput} from '../../services/db'

/**
 * Controller for handling metrics-related requests.
 */
export default class MetricsController {

  /**
   * Retrieves and returns the current IOPS and throughput metrics.
   *
   * @param {Object} params - Request parameters.
   * @param {Object} params.response - The response object.
   *
   * @returns {Promise<void>} A promise that resolves when the response has been sent.
   *
   * @example
   * // Assuming this is an Express.js route
   * app.get('/metrics', (req, res) => {
   *   const metricsController = new MetricsController();
   *   metricsController.show({ response: res });
   * });
   */
    public async show({ response }: { response: any }){
        try {
            const data = await getIOPSAndThroughput();
            response.json(data);
          } catch (error) {
            console.error('Error fetching metrics:', error);
            response.status(500).json({ error: 'Internal Server Error' });
          }
    }
}
