import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { getSidebarItems } from "@/lib/utils-server";
import DocsMenuItems from "./docs-menu-items";
import DocsSidebarHeader from "./docs-sidebar-header";

export async function DocsSidebar() {
  const sidebarItems = await getSidebarItems();

  const gettingStartedItems = [
    { name: "introduction", title: "Introduction", url: "/docs" },
    {
      name: "prerequisites",
      title: "Prerequisites",
      url: "/docs/prerequisites",
    },
  ];

  // Define the order of categories manually
  const categoryOrder = [
    "database",
    "3rd-party",
    "ui",
    // Add more categories here in the order you want
  ];

  // Get remaining categories not in categoryOrder, sorted alphabetically
  const remainingCategories = Object.keys(sidebarItems)
    .filter((category) => !categoryOrder.includes(category))
    .sort((a, b) => a.localeCompare(b));

  // Combine: manual order first, then alphabetical
  const allCategories = [...categoryOrder, ...remainingCategories];

  return (
    <Sidebar>
      <DocsSidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <DocsMenuItems items={gettingStartedItems} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {allCategories.map((category) => {
          const items = sidebarItems[category];
          if (!items || items.length === 0) return null;

          return (
            <SidebarGroup key={category}>
              <SidebarGroupLabel>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <DocsMenuItems items={items} />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
