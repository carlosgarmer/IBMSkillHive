import {
    UilEstate,
    UilClipboard,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilSignOutAlt,
} from "@iconscout/react-unicons"

// Sidebar DATA
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Overview",
        path: "/overview/index"
    }, 
    {
        icon: UilUsersAlt,
        heading: "All Teams",
        path: "/teams/index"
    },{
        icon: UilUsersAlt,
        heading: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: UilChart,
        heading: "Goals",
        path: "/goals/show"
    },
];

export const CardsData = [{
    title: "Progress",
    color: {
        backGround: "linear-gradient(180deg, #bb75ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",  
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
        {
            name: "Sales",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
    ],
},
{
    title: "Revenue",
    color: {
        backGround: "linear-gradient(180deg, #bb75ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",  
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
        {
            name: "Sales",
            data: [31, 40, 28, 51, 42, 109, 100],
        },
    ],
},
];