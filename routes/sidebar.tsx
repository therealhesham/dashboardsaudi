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
  },  {
    path: '/admin/dashboardadmins', 
    icon: 'HomeIcon', 
    name: 'Admins', 
    exact: true,
  },

{
    path: '/admin/addcountry', 
    icon: 'FormsIcon', 
    name: 'Add Country', 
    // exact: true,
  },
{
    path: '/admin/clientslist', 
    icon: 'HomeIcon', 
    name: 'Clientlist', 
    // exact: true,
  },
{
    path: '/admin/femaleworkers', 
    icon: 'HomeIcon', 
    name: 'Female Workers List', 
    // exact: true,
  },{
    path: '/admin/maleworkers', 
    icon: 'HomeIcon', 
    name: 'Male Workers List', 
    // exact: true,
  },{
    path: '/admin/newmaleworker', 
    icon: 'FormsIcon', 
    name: 'Add Male Worker', 
    // exact: true,
  },{
    path: '/admin/newfemaleworker', 
    icon: 'FormsIcon', 
    name: 'Add Female Worker', 
    // exact: true,
  },{
    path: '/admin/employees', 
    icon: 'HomeIcon', 
    name: 'Employees', 
  },{
    path: '/admin/addhomemaid', 
    icon: 'FormsIcon', 
    name: 'Add Home Maid', 
    // exact: true,
  },{
    path: '/admin/homemaidlist', 
    icon: 'HomeIcon', 
    name: 'Homemaid Arrival List', 
  },{
    path: '/admin/addoffice', 
    icon: 'CardsIcon', 
    name: 'Add office', 
    // exact: true,
  },{
    path: '/admin/externaloffices', 
    icon: 'HomeIcon', 
    name: 'Foreign offices', 
    // exact: true,
  },
 
  {
    path: '/admin/addadmin',
    icon: 'CardsIcon',
    name: 'Add New Admin',
  }
]

export type {IRoute}
export default routes
