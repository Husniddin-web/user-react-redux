export const users = [
    {
        name: "admin",
        password: "admin123",
        permissions: ["view_users", "edit_users", "view_orders", "view_stats"]
    },
    {
        name: "manager",
        password: "manager123",
        permissions: ["view_orders", "view_stats"]
    },
    {
        name: "support",
        password: "support123",
        permissions: ["view_users", "view_orders"]
    },
    {
        name: "guest",
        password: "guest123",
        permissions: ["view_stats"]
    }
];
