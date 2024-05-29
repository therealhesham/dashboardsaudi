/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 */

interface IRoute{
  path?: string
  icon?: string
  name: string
  routes?: IRoute[]
  checkActive?(pathname: String, route: IRoute): boolean
  exact?: boolean
}

export function routeIsActive (pathname: String, route: IRoute): boolean {
  if (route.checkActive) {
    return route.checkActive(pathname, route)
  }

  return route?.exact
    ? pathname == route?.path
    : (route?.path ? pathname.indexOf(route.path) === 0 : false)
}

const routes: IRoute[] = [
  {
    path: '/admin', 
    icon: 'HomeIcon', 
    name: 'Dashboard', 
    exact: true,
  },
{
    path: '/admin/clientslist', 
    icon: 'HomeIcon', 
    name: 'Clientlist', 
    // exact: true,
  },
  
  {
    path: '/admin/forms',
    icon: 'FormsIcon',
    name: 'Forms',
  },
  {
    path: '/admin/addadmin',
    icon: 'CardsIcon',
    name: 'Add New Admin',
  },
  {
    path: '/admin/resetpassword',
    icon: 'ChartsIcon',
    name: 'Reset Admin Password',
  },

  {
    path: '/admin/tables',
    icon: 'TablesIcon',
    name: 'Tables',
  },
]

export type {IRoute}
export default routes
