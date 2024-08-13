/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

// Import the Route class from AdonisJS Core
import Route from '@ioc:Adonis/Core/Route'

// Import the HealthCheck class from AdonisJS Core
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

// Define a route for the root URL ('/') that returns a JSON response
Route.get('/', async () => {
  return { hello: 'world' }
})

// Define a route for the '/health' URL that returns a health check report
Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  // If the report indicates the application is healthy, return a 200 OK response
  // Otherwise, return a 400 Bad Request response
  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})

// Define a resourceful route for SnapshotPolicy with only the specified actions
Route
  .resource('SnapshotPolicy', 'SnapshotPoliciesController')
  .only(['index', 'show', 'update', 'create'])
  .apiOnly()

// Define a resourceful route for metrics with only the 'show' action
Route
  .resource('metrics', 'MetricsController')
  .only(['show'])
  .apiOnly()
