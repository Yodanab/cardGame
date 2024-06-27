import React, { useState } from "react";
import { PackSkelton } from "frontend/layout/Loader/PackSkelton/PackSkelton";
import {
  PackGrid,
  ShopWrap,
  DescriptionCard,
} from "./Shop.style";
import { Tabs, Tab } from "@nextui-org/react";

const tabs = [
  {
    id: "daily",
    label: "Daily",
    content:
      "Discover a fresh mix of cards every day with our Daily Pack. Perfect for players who enjoy daily surprises and adding new cards to their collection.",
  },
  {
    id: "classic",
    label: "Classic",
    content:
      "Enhance your deck with the Classic Pack, featuring a balanced selection of essential and iconic cards. Ideal for both new and seasoned players.",
  },
  {
    id: "deals",
    label: "Deals",
    content:
      "Expand your collection affordably with our Deals Pack. Packed with high-value cards at great prices, it's perfect for savvy players looking for the best deals.",
  },
];

export const Shop = () => {
  const [selectedTab, setSelectedTab] = useState(
    "daily"
  );
  return (
    <ShopWrap>
      <Tabs
        aria-label="Dynamic tabs"
        selectedKey={selectedTab}
        onSelectionChange={setSelectedTab}
        size="lg"
      >
        {tabs.map((tab) => {
          return (
            <Tab key={tab.id} title={tab.label}>
              <DescriptionCard>
                {tab.content}
              </DescriptionCard>
            </Tab>
          );
        })}
      </Tabs>

      <PackGrid>
        {Array.from({ length: 3 }).map((_, i) => {
          return <PackSkelton key={i} />;
        })}
      </PackGrid>
    </ShopWrap>
  );
};
