const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

const adminRoutes = adminPaths2.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: `<NavLink to="/admin/${item.path}">Dashboard</NavLink>`,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: `<NavLink to="/admin/${child.path}">Dashboard</NavLink>`,
      })),
    });
  }
  return acc;
}, []);
